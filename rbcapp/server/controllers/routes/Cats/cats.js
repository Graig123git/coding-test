/**
 * require CatService and CatModel
 */
const CatService = require('../../../services/CatService');
const CatModel = require('../../../models/CatModel');

//dependency injection for ease of unit testing
const catService = new CatService(new CatModel());

module.exports = (function () {
	var router = require('express').Router();

	router.get('/', async (req, res, next) => {
		try {
			// Call to CatService layer.
			const { catList } = await catService.get_Cats();
			// return response
			return res.json({ catList });
		} catch (error) {
			//return any errors to the react client
			res.status(500).send({ error: error });
		}
	});

	return router;
})();
