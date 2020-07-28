const supertest = require('supertest');

const env = require('dotenv').config();
const api = supertest(process.env.BASE_URL);

const getValidation = (payload) =>
	api
		.get('/posts')
        .set('Content-Type', 'application/json')
        
const postData = (payload) =>
        api
            .post('/posts')
            .set('Content-Type', 'application/json')

module.exports = {
	getValidation, postData
};