module.exports = {
    returnCodeNumber: {
        0: "No Error",
        1: "Format Error",
        2: "Server Failure",
        3: "Non-Existent Domain",
        4: "Not Implemented",
        5: "Query Refused",
        6: "Name Exists when it should not",
        7: "RR Set Exists when it should not",
        8: "RR Set that should exist does not",
        9: "Server Not Authoritative for zone or Not Authorized",
        10: "Name not contained in zone",
        11: "DSO-TYPE Not Implemented",
        16: "Bad OPT Version or TSIG Signature Failure",
        17: "Key not recognized",
        18: "Signature out of time window",
        19: "Bad TKEY Mode",
        20: "Duplicate key name",
        21: "Algorithm not supported",
        22: "Bad Truncation",
        23: "Bad/missing Server Cookie",
    },
    returnCodeID: {
        NoError: ["No Error", 0],
        FormErr: ["Format Error", 1],
        ServFail: ["Server Failure", 2],
        NXDomain: ["Non-Existent Domain", 3],
        NotImp: ["Not Implemented", 4],
        Refused: ["Query Refused", 5],
        YXDomain: ["Name Exists when it should not", 6],
        YXRRSet: ["RR Set Exists when it should not", 7],
        NXRRSet: ["RR Set that should exist does not", 8],
        NotAuth: ["Server Not Authoritative for zone or Not Authorized", 9],
        NotZone: ["Name not contained in zone", 10],
        DSOTYPENI: ["DSO-TYPE Not Implemented", 11],
        BADVERS: ["Bad OPT Version", 16],
        BADSIG: ["TSIG Signature Failure", 16],
        BADKEY: ["Key not recognized", 17],
        BADTIME: ["Signature out of time window", 18],
        BADMODE: ["Bad TKEY Mode", 19],
        BADNAME: ["Duplicate key name", 20],
        BADALG: ["Algorithm not supported", 21],
        BADTRUNC: ["Bad Truncation", 22],
        BADCOOKIE: ["Bad/missing Server Cookie", 23],
    },
    httpCode: {
        400: "DNS query not specified or too small.",
        413: "DNS query is larger than maximum allowed DNS message size.",
        415: "Unsupported content type.",
        504: "Resolver timeout while waiting for the query response.",
    },
    recordType: {
        1: "A",
        2: "NS",
        3: "MD",
        4: "MF",
        5: "CNAME",
        6: "SOA",
        7: "MB",
        8: "MG",
        9: "MR",
        10: "NULL",
        11: "WKS",
        12: "PTR",
        13: "HINFO",
        14: "MINFO",
        15: "MX",
        16: "TXT",
        17: "RP",
        18: "AFSDB",
        19: "X25",
        20: "ISDN",
        21: "RT",
        22: "NSAP",
        23: "NSAP-PTR",
        24: "SIG",
        25: "KEY",
        26: "PX",
        27: "GPOS",
        28: "AAAA",
        29: "LOC",
        30: "NXT",
        31: "EID",
        32: "NIMLOC",
        33: "SRV",
        34: "ATMA",
        35: "NAPTR",
        36: "KX",
        37: "CERT",
        38: "A6",
        39: "DNAME",
        40: "SINK",
        41: "OPT",
        42: "APL",
        43: "DS",
        44: "SSHFP",
        45: "IPSECKEY",
        46: "RRSIG",
        47: "NSEC",
        48: "DNSKEY",
        49: "DHCID",
        50: "NSEC3",
        51: "NSEC3PARAM",
        52: "TLSA",
        53: "SMIMEA",
        55: "HIP",
        56: "NINFO",
        57: "RKEY",
        58: "TALINK",
        59: "CDS",
        60: "CDNSKEY",
        61: "OPENPGPKEY",
        62: "CSYNC",
        63: "ZONEMD",
        99: "SPF",
        100: "UINFO",
        101: "UID",
        102: "GID",
        103: "UNSPEC",
        104: "NID",
        105: "L32",
        106: "L64",
        107: "LP",
        108: "EUI48",
        109: "EUI64",
        249: "TKEY",
        250: "TSIG",
        251: "IXFR",
        252: "AXFR",
        253: "MAILB",
        254: "MAILA",
        255: "*",
        256: "URI",
        257: "CAA",
        258: "AVC",
        259: "DOA",
        260: "AMTRELAY",
        32768: "TA",
        32769: "DLV",
    },
}
