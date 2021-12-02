/**
 * CatService class contains all the business logics for cats
 */
module.exports = class CatService {
	/**
	 * uses dependecy injection for ease of Unit testing the Service layer
	 */
	constructor(CatModel) {
		this.CatModel = CatModel;
	}

	/**
	 *
	 * @returns catList
	 * This methods interacts with the Model layer to get catList
	 */
	async get_Cats() {
		const catList = await this.CatModel.get_Cats();
		return { catList: catList };
	}
};
