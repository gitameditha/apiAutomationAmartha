const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));

const page = require('../page/get_validation_page.js');
const payload = require('../data/validation_data.json');
const schema = require('../schema/get_validation_schema.json');
const schemaCreated = require('../schema/post_success_schema.json');
const code = require('../helper/response_code_messages.json');


const testCase = {
	describe: 'As a User, I should be able to see data',
	positive: {
        getDataBody: 'As a User, I should be able to see data schema',
        postDataMotorcycle : 'As user, I should be able to post data'
	},
	negative: {
		//unauthorized: 'As an User, I cant create a campaign -- Unauthorized',
		//badRequest: 'As an User, I cant create a campaign -- Bad Request'
	}
};

describe(`@getvalidationtag ${testCase.describe}`, () => {
	before('#hook', async () => {

	});

	it(`@get ${testCase.positive.getDataBody}`, async () => {
		const response = await page.getValidation(payload);
		assert(response.status).to.equal(code.successOk);
        assert(response.body).to.be.jsonSchema(schema);
    });
    it(`@post ${testCase.positive.postDataMotorcycle}`, async () => {
		const response = await page.postData(payload);
		assert(response.status).to.equal(code.successCreated);
        assert(response.body).to.be.jsonSchema(schemaCreated);
	});

	
});
