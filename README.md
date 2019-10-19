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

### oneDot({domain, type, method?}, callback?)

#### domain

Type: `string`

The domain name to search.

#### type

Type: `string or number`

The [type of DNS record](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4) to search.

##### method

Type: `string`\
Default: `https`

The method of contacting the 1.1.1.1 service. Can be `https` or `tls`.

##### callback

Type: `Function`

If you don't want to use promises, you can specify a callback here.
