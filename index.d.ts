import Promise from "bluebird"

/**
 * Get the DNS records for a domain using HTTPS over DNS.
 * @param name The domain name to search.
 * @param type The type of DNS record to search.
 * @param dnssec Validate the records with DNSSEC.
 * @example
 * ```
 * const dns = require("one-dot");
 * dns({ name: "richie-bendall.ml", type: "a" })
 * //=> [{ name: 'richie-bendall.ml.', type: 1, TTL: 200, data: '104.28.8.130' }, { name: 'richie-bendall.ml.', type: 1, TTL: 200, data: '104.28.9.130' }]
 * ```
*/
export declare function https({ name, type, dnssec }: {
    name: string,
    type: string,
    dnssec: boolean = true
}): Promise

export declare function tls({ name, type }: {
    name: string,
    type: string
}): Promise

export = https;
