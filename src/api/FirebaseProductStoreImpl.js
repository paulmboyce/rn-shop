import {
	useFirebaseApi,
	METHOD_DELETE,
	METHOD_GET,
	METHOD_POST,
	METHOD_PUT,
} from "./CallFirebaseApi";

const PRODUCTS_COLLECTION = "products";
const HEADER_CONTENT_TYPE_APPLN_JSON = { "Content-Type": "application/json" };

const getProductAsync = async (id) => {};
const getProductsAsync = async () => {
	return useFirebaseApi({
		method: METHOD_GET,
		collection: PRODUCTS_COLLECTION,
	});
};

const deleteProductAsync = async (id) => {
	console.log("About to DELETE product, with ID: ", id);
	return useFirebaseApi({
		method: METHOD_DELETE,
		collection: PRODUCTS_COLLECTION + `/${id}`,
	});
};

const updateProductAsync = async (id, changes) => {
	console.log("About to UPDATE product: ", changes);
	return useFirebaseApi({
		method: METHOD_PUT,
		headers: HEADER_CONTENT_TYPE_APPLN_JSON,
		collection: PRODUCTS_COLLECTION + `/${id}`,
		bodyData: changes,
	});
};

const addProductAsync = async (product) => {
	console.log("About to CREATE product: ", product);
	return useFirebaseApi({
		method: METHOD_POST,
		headers: HEADER_CONTENT_TYPE_APPLN_JSON,
		collection: PRODUCTS_COLLECTION,
		bodyData: product,
	});
};

export {
	addProductAsync,
	deleteProductAsync,
	getProductAsync,
	getProductsAsync,
	updateProductAsync,
};
