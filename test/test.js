
const expect = require('chai').expect;
const index = require('../index');

const decode = index.decode;

describe('Address encoder', () => {
  describe('[POSITIVE] Should decode properly', () => {

    let results;
    let error;

    const requiredFields = ['country', 'city', 'zipCode', 'streetName', 'streetNumber'];
    const positive = [
      {
        // Normal
        text: 'country:Finland|state:Uusimaa|city:Helsinki|zipCode:00100|streetName:Ludviginkatu|streetNumber:6',
        fields: ['country', 'state', 'city', 'zipCode', 'streetName', 'streetNumber'],
      },
      {
        // Interchangeable fields
        text: 'city:Helsinki|state:Uusimaa|country:Finland|zipCode:00100|streetName:Ludviginkatu|streetNumber:6',
        fields: ['country', 'state', 'city', 'zipCode', 'streetName', 'streetNumber'],
      },
      {
      // Spaces in-between
        text: 'country:New Zealand|state:Bay of Plenty|city:White Pine Bush|zipCode:3191|streetName:White Pine Bush Road|streetNumber:479',
        fields: ['country', 'state', 'city', 'zipCode', 'streetName', 'streetNumber'],
      },
      {
        // Other interesting special characters
        text: 'country:Aäöم武кв.-`\'\'´`|state:Aäöم武кв.-`\'\'´`|city:Aäöم武кв.-`\'\'´`|zipCode:3191|streetName:Aäöم武кв.-`\'\'´`|streetNumber:479',
        fields: ['country', 'state', 'city', 'zipCode', 'streetName', 'streetNumber'],
      },
    ];

    try {
      results = positive.map(testCase => {
        return {
          decoded: decode(testCase.text, requiredFields),
          fields: testCase.fields,
        };
      });
    } catch (e) {
      error = e;
    }

    it('Should not return any error for all cases', () => {
      expect(error).to.be.undefined;
    });

    it('Should return all fields in the string', () => {
      results.forEach(result => {
        expect(result.decoded).to.have.all.keys(result.fields);
      });
    });

  });

  describe('[NEGATIVE] Should throw error properly', () => {

    let results;
    let error;

    const requiredFields = ['country', 'city', 'zipCode', 'streetName', 'streetNumber'];
  });
});
