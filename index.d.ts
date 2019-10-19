import Promise from "bluebird"

/**
 * The data returned by the DNS search.
 * ```
 */
interface DNSData {
    /**
     * The domain name assigned to the record.
     */
    domain: string,

    /**
     * The type of record.
     */
    type: string,

    /**
     * The "Time to live" value of the record.
     */
    ttl: number,

    /**
    * The data of the record.
    */
    data: string
}

/**
 * Get the DNS records for a domain using HTTPS or TLS over DNS.
 * @param obj.domain The domain name to search.
 * @param obj.type The type of DNS record to search.
 * @param obj.method The method of contacting the 1.1.1.1 service.
 * @example
 * ```
 * const oneDot = require("one-dot");
 * oneDot({ domain: "richie-bendall.ml", type: "a" })
 * //=> [{ domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.8.130' }, { domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.9.130' }]
 * ```
 */
declare function oneDot({ domain, type, method }: {
    domain: string,
    type: string | number,
    method: "https" | "tls" | "HTTPS" | "TLS" = "https"
}): Promise<DNSData[]>

declare function oneDot({ domain, type, method }: {
    domain: string,
    type: string | number,
    method: "https" | "tls" | "HTTPS" | "TLS" = "https",
}, callback: (error: Error | null, result: DNSData[] | void) => any): void

export = oneDot
