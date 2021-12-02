/**
 * SharkService class contains all the business logics for sharks
 */
module.exports = class SharkService {
	/**
	 * uses dependecy injection for ease of Unit testing the Service layer
	 */
	constructor(SharkModel) {
		this.SharkModel = SharkModel;
	}

	/**
	 *
	 * @returns sharkList
	 * This methods interacts with the Model layer to get sharkList
	 */
	async get_Sharks() {
		const sharkList = await this.SharkModel.get_Sharks();
		return { sharkList: sharkList };
	}
};
