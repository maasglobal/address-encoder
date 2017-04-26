'use strict';

/**
 * Function to decode the address format
 *
 * @param {String} address - given encoded address
 * @param {Array<String>} fields - the case sensitive fields that the encoded address need to have
 */
function decode(address, fields) {
  if (!address) throw new Error('Missing "address" input');
  let requiredFields = fields || [];

  const result = address.split('|').reduce((accumulator, item) => {
    const key = item.split(':')[0];
    const value = item.split(':')[1];

    if (!key) throw new Error(`Invalid key ${key}`);
    if (!value) throw new Error(`Invalid value ${value}`);

    if (accumulator.hasOwnProperty(key)) {
      throw new Error(`Detect duplication of field ${key} in fromAddress or toAddress`);
    }

    if (requiredFields.indexOf(key) !== -1) {
      requiredFields = requiredFields.filter(field => field !== key);
    }

    accumulator[key] = value;
    return accumulator;
  }, {});

  if (requiredFields.length !== 0) {
    throw new Error(`Missing ${requiredFields} from input text`);
  }

  return result;
}

module.exports = {
  decode,
};
