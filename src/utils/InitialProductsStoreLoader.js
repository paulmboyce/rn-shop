import PRODUCT_DATA from "../data/products";
import { addProductAsync } from "../api/ProductStoreInterface";
import { extractFields } from "./ProductFields";

const loadInitialProductsToStoreAsync = () => {
	return PRODUCT_DATA.map((product) => {
		return addProductAsync(extractFields(product));
	});
};

export default loadInitialProductsToStoreAsync;
