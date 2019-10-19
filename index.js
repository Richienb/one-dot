"use strict"

const fetch = require("cross-fetch")
const { stringify: encodeQueryString } = require("query-string")
const Promise = require("bluebird")
const { fromPromise } = require("universalify")
const dnstls = require("dns-over-tls")
const _ = require("lodash")

const codes = require("./utils/codes")
const DNSError = require("./utils/dns-error")

module.exports = fromPromise(({ name, type, method = "https" }) => new Promise((resolve, reject) => {
    if (!name) throw new ReferenceError("Name not specified!")
    if (!type) throw new ReferenceError("Type not specified!")
    method = _.lowerCase(method)
    if (method === "https") {
        fetch(`https://cloudflare-dns.com/dns-query?${encodeQueryString({
            name,
            type,
            do: true,
            cd: !false,
        })}`, { headers: { Accept: "application/dns-json" } })
            .then((res) => {
                if (res.ok) return res
                else return reject(new DNSError(codes.http[res.status], res.status))
            })
            .then((res) => res.json())
            .then(({ Status, Answer, Authority }) => {
                if (Status !== 0) return reject(new DNSError(codes.rcodeNum[Status], Status))
                else {
                    return resolve(_.map(Answer || Authority, ({ name, type, TTL, data }) => ({
                        domain: name,
                        type: codes.recordtype[type],
                        ttl: TTL,
                        data,
                    })))
                }
            })
            .catch(reject)
    } else if (method === "tls") {
        if (_.isNumber(type)) type = codes.recordtype[type]
        dnstls.query({
            name,
            type,
            host: "1.1.1.1",
            servername: "cloudflare-dns.com",
        })
            .then(({ rcode, answers }) => {
                if (rcode === "NOERROR") {
                    return resolve(_.map(answers, ({ name, type, ttl, data }) => ({
                        domain: name || _.values(answers[0]).name,
                        type,
                        ttl,
                        data,
                    })))
                } else return reject(new DNSError(codes.rcodeID[rcode][0], codes.rcodeID[rcode][1]))
            })
            .catch(reject)
    } else return reject(new ReferenceError("Invalid method specified!"))
}))
