'use strict';

/**
 * Function to decode the address format
 *
 * @param {String} address - given encoded address
 * @param {Array<String>} requiredFields - fields that the encoded address need to have
 */
function decode(address, requiredFields) {
  if (!address) return undefined;

  const result = address.split('|').reduce((accumulator, item) => {
    const key = item.split(':')[0];
    const value = item.split(':')[1];

    if (accumulator.hasOwnProperty(key)) {
      throw new MaaSError(`Detect duplication of field ${key} in fromAddress or toAddress`, 400);
    }

    const matchedField = requiredFields.find(field => field === key);

    if (!matchedField) {
      throw new MaaSError('Invalid field specified in fromAddress or toAddress', 400);
    }

    accumulator[matchedField] = value;
    return accumulator;
  }, {});

  return result;
}

module.exports = {
  decode,
}
