
const config =require('./config')
const superTest = require("supertest");
const request = superTest(config.baseUrl);

module.exports = request;

