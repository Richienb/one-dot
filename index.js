"use strict"

const dnstls = require("dns-over-tls")
const is = require("@sindresorhus/is")
const ky = require("ky-universal").create({
    throwHttpErrors: false,
})

const codes = require("./utils/codes")
const DNSError = require("./utils/dns-error")

async function https({ domain, type }) {
    if (!is.string(domain)) throw new TypeError("Invalid domain provided!")
    if (is.string(type)) type = type.toLowerCase()
    else if (!is.number(type)) throw new TypeError("Invalid type provided!")

    const res = await ky("https://cloudflare-dns.com/dns-query", {
        searchParams: {
            name: domain,
            type,
            do: true,
            cd: true,
        },
        headers: {
            Accept: "application/dns-json",
        },
    })

    if (!res.ok) throw new DNSError(codes.httpCode[res.status], res.status)

    const { Status, Answer, Authority } = await res.json()

    if (Status !== 0) throw new DNSError(codes.returnCodeNumber[Status], Status)

    return (Answer || Authority).map(({ name, type, TTL, data }) => ({
        domain: name,
        type: codes.recordType[type],
        ttl: TTL,
        data,
    }))
}

async function tls({ domain, type }) {
    if (is.number(type)) type = codes.recordType[type]

    const { rcode, answers } = await dnstls.query({
        name: domain,
        type,
        host: "1.1.1.1",
        servername: "cloudflare-dns.com",
    })

    if (rcode === "NOERROR") {
        return answers.map(({ name, type, ttl, data }) => ({
            domain: name || Object.values(answers[0]).name,
            type,
            ttl,
            data,
        }))
    } else throw new new DNSError(codes.returnCodeID[rcode][0], codes.returnCodeID[rcode][1])
}

module.exports = https
module.exports.https = https
module.exports.tls = tls
