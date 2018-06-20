# MaaS Address Encoder

[![Build Status](https://travis-ci.org/maasglobal/address-encoder.svg?branch=master)](https://travis-ci.org/maasglobal/address-encoder)

## Install

```shell
npm install address-encoder
```

## Description

Encode and decode MaaS's address schemas

The format: `country:Finland|city:Helsinki|zipCode:00100|streetName:Ludviginkatu|streetNumber:6`

Will be turned into the following object after decoding

```javascript
{
  country: "Finland",
  city: "Helsinki",
  streetName: "Ludviginkatu",
  streetNumber: "6"
}
```

### Current supports
  - Required fields: requires different fields to have non-empty value inside the encoded string
  - Decoding the format
