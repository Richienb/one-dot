import test from "ava"
import oneDot from "."
import DNSError from "./utils/dns-error"

test("main", async (t) => {
    const verifyData = (data) => data.forEach((value) => {
        t.is(typeof value.domain, "string")
        t.is(typeof value.type, "string")
        t.is(typeof value.ttl, "number")
        t.is(typeof value.data, "string")
    })

    await t.throwsAsync(() => oneDot({ domain: "google.com" }), {
        instanceOf: TypeError,
        message: "Invalid type provided!",
    })

    await t.throwsAsync(() => oneDot({ type: "a" }), {
        instanceOf: TypeError,
        message: "Invalid domain provided!",
    })

    await t.throwsAsync(() => oneDot({ domain: "google.com", type: "thisIsInvalid" }), {
        instanceOf: DNSError,
        message: "DNS query not specified or too small.",
        code: 400,
    })

    verifyData(await oneDot({ domain: "google.com", type: "a" }))
    verifyData(await oneDot.https({ domain: "google.com", type: "a" }))
    verifyData(await oneDot.tls({ domain: "google.com", type: "a" }))
})
