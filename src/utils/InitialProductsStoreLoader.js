import Constants from "expo-constants";

import PRODUCT_DATA from "../_io/view/mobile/data/products";
import { addProductAsync } from "../api/ProductStoreInterface";
import { extractFields } from "./ProductFields";

const loadInitialProductsToStoreAsync = () => {
	const loadTestData = Constants.manifest.extra.APP_CONFIG_LOAD_TEST_DATA;

	console.log(
		"To load test data, set APP_CONFIG_LOAD_TEST_DATA {true} in app.config.js"
	);

	if (!loadTestData) {
		console.log("Not loading test data. ");
		return [];
	}
	console.log("Loading test data to data store...");
	return PRODUCT_DATA.map((product) => {
		return addProductAsync(extractFields(product));
	});
};

export default loadInitialProductsToStoreAsync;
