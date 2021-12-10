/**
 * require SharkService and SharkModel
 */
const SharkService = require('../../../services/SharkService');
const SharkModel = require('../../../models/SharkModel');

//dependency injection for ease of unit testing
const sharkService = new SharkService(new SharkModel());

module.exports = (function () {
	var router = require('express').Router();

	router.get('/', async (req, res, next) => {
		try {
			// Call to SharkService layer.
			const { sharkList } = await sharkService.get_Sharks();
			// return response
			return res.json({ sharkList });
		} catch (error) {
			//return any errors to the react client
			res.status(500).send({ error: error });
		}
	});

	return router;
})();
