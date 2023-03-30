const chai = require('chai');
const assert = require('chai').expect;
const page = require('../page/get_neows_page.js');
const schema = require('../schema/get_neows_schema.json');

let payload = {
    'start_date': '2021-01-01',
	'end_date' : '2021-01-02',
	'api_key' : process.env.API_KEY
}

const testCase = {
    describe: 'As a User, I should be able to see data',
	positive: {
        validParams: 'As a User, I want to see object near earth',
	},
	negative: {
		inValidParams: 'As a User, I want to see object near earth more than 7 days',
	}
}

describe(`@get ${testCase.describe}`, () => {
    it(`@positive ${testCase.positive.validParams}`, async () => {
		const response = await page.getNeows(payload);
		assert(response.status).to.equal(200);
		assert(response.body).to.be.jsonSchema(schema);
    });
});