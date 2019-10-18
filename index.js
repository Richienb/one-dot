"use strict"

const fetch = require("cross-fetch")
const { stringify: encodeQueryString } = require("query-string")
const Promise = require("bluebird")
const { fromPromise } = require("universalify")
const dnstls = require("dns-over-tls")
const codes = require("./utils/codes")

class DNSError extends Error {
    constructor(message = "", code = 0, ...args) {
        super(message, ...args)
        this.message = message
        this.code = code
    }
}

const https = fromPromise(({ name, type, dnssec = true }) => new Promise((resolve, reject) => {
    fetch(`https://cloudflare-dns.com/dns-query?${encodeQueryString({
        name,
        type,
        do: dnssec,
        cd: !dnssec,
    })}`, { headers: { Accept: "application/dns-json" } })
        .then((res) => {
            if (res.ok) return res
            else return reject(new DNSError(codes.http[res.status], res.status))
        })
        .then((res) => res.json())
        .then(({ Status, Answer }) => {
            if (Status !== 0) return reject(new DNSError(codes.rcodeNum[Status], Status))
            else return resolve(Answer)
        })
        .catch(reject)
}))

const tls = fromPromise(({ name, type }) => new Promise((resolve, reject) => {
    dnstls.query({
        name,
        type,
        host: "1.1.1.1",
        servername: "cloudflare-dns.com",
    })
        .then(({ rcode, answers }) => {
            if (rcode === "NOERROR") return resolve(answers)
            else return reject(new DNSError(...codes.rcodeID[rcode]))
        })
        .catch(reject)
}))

module.exports = require("default-exports")({ https, tls })
