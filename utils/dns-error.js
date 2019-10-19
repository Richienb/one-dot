module.exports = class DNSError extends Error {
    constructor(message = "", code = 0, ...args) {
        super(message, ...args)
        this.message = message
        this.name = "DNSError"
        this.code = code
    }
}
