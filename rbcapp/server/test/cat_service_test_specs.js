const assert = require('chai').assert;
const expect = require('chai').expect;
const mocha = require('mocha');
const CatService = require('../services/CatService');
const CatModel = require('../models/CatModel');

mocha.describe('CatService unit test', () => {
	mocha.describe('getCats', () => {
		it('It should return a list of cats', async function () {
			const catService = new CatService(new CatModel());
			const getcatList = await catService.get_Cats();
			expect(getcatList).to.be.an('Object');
		});
	});
});
