const assert = require('chai').assert;
const expect = require('chai').expect;
const mocha = require('mocha');
const SharkService = require('../services/SharkService');
const SharkModel = require('../models/SharkModel');

mocha.describe('SharkService unit test', () => {
	mocha.describe('getSharks', () => {
		it('It should return a list of sharks', async function () {
			const sharkService = new SharkService(new SharkModel());
			const getsharkList = await sharkService.get_Sharks();
			expect(getsharkList).to.be.an('Object');
		});
	});
});
