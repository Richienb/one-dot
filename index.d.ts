/**
 * The data returned by the DNS search.
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
 * The return type for the functions.
*/
declare type ReturnedDNSData = Promise<DNSData[]>

/**
 * Get the DNS records for a domain using DNS over HTTPS or DNS over TLS.
*/
declare interface oneDot {
    /**
     * Get the DNS records for a domain using DNS over HTTPS.
     * @param obj.domain The domain name to obtain the DNS records for.
     * @param obj.type The type of DNS record to obtain.
     * @example
     * ```
     * const oneDot = require("one-dot");
     * oneDot({ domain: "richie-bendall.ml", type: "a" })
     * //=> [{ domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.8.130' }, { domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.9.130' }]
     * ```
     */
    ({ domain, type }: {
        domain: string,
        type: string | number
    }): ReturnedDNSData

    /**
     * Get the DNS records for a domain using DNS over HTTPS.
     * @param obj.domain The domain name to obtain the DNS records for.
     * @param obj.type The type of DNS record to obtain.
     * @example
     * ```
     * const oneDot = require("one-dot");
     * oneDot.https({ domain: "richie-bendall.ml", type: "a" })
     * //=> [{ domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.8.130' }, { domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.9.130' }]
     * ```
    */
    https({ domain, type }: {
        domain: string,
        type: string | number
    }): ReturnedDNSData

    /**
     * Get the DNS records for a domain using DNS over TLS.
     * @param obj.domain The domain name to obtain the DNS records for.
     * @param obj.type The type of DNS record to obtain.
     * @example
     * ```
     * const oneDot = require("one-dot");
     * oneDot.tls({ domain: "richie-bendall.ml", type: "a" })
     * //=> [{ domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.8.130' }, { domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.9.130' }]
     * ```
    */
    tls({ domain, type }: {
        domain: string,
        type: string | number
    }): ReturnedDNSData
}

export = oneDot
