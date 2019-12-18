# One Dot [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/one-dot/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/one-dot)

CloudFlare's 1.1.1.1 DNS service in NodeJS.

[![NPM Badge](https://nodei.co/npm/one-dot.png)](https://npmjs.com/package/one-dot)

## Install

```sh
npm install one-dot
```

## Usage

```js
const oneDot = require("one-dot");

oneDot({ domain: "richie-bendall.ml", type: "a" }).then(console.log);
//=> [{ domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.8.130' }, { domain: 'richie-bendall.ml.', type: "A", ttl: 200, data: '104.28.9.130' }]
```

## API

### oneDot(options)

### oneDot.https(options)

### oneDot.tls(options)

#### options

Type: `object`

##### domain

Type: `string`

The domain name to obtain the DNS records for.

##### type

Type: `string or number`

The [type of DNS record](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4) to obtain.

## Upgrading from v1

- Removed the `method` option. Instead use `oneDot` or `oneDot.https` for HTTPS and `oneDot.tls` for TLS.
- The Promise system has been changed to use native Promises via async/await instead of Bluebird.
- Callback support has been removed.
- `TypeError`s instead of `ReferenceError`s are now returned if an invalid `domain` or `type` is provided.
