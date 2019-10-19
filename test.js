import test from "ava"
import oneDot from "."
import _ from "lodash"
import DNSError from "./utils/dns-error"

test("main", async (t) => {
    const verifyData = (data) => _.forEach(data, (value) => {
        t.is(typeof value.domain, "string")
        t.is(typeof value.type, "string")
        t.is(typeof value.ttl, "number")
        t.is(typeof value.data, "string")
    })

    await t.throwsAsync(() => oneDot({ name: "google.com", type: "a", method: "someInvalidMethod" }), {
        instanceOf: ReferenceError,
        message: "Invalid method specified!",
    })

    await t.throwsAsync(() => oneDot({ name: "google.com" }), {
        instanceOf: ReferenceError,
        message: "Type not specified!",
    })

    await t.throwsAsync(() => oneDot({ type: "a" }), {
        instanceOf: ReferenceError,
        message: "Name not specified!",
    })

    verifyData(await oneDot({ name: "google.com", type: "a", method: "https" }))
    verifyData(await oneDot({ name: "google.com", type: "a", method: "tls" }))

    await t.throwsAsync(() => oneDot({ name: "google.com", type: "thisIsInvalid" }), {
        instanceOf: DNSError,
        message: "DNS query not specified or too small.",
        code: 400,
    })
})
