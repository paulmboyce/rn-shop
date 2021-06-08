const FIREBASE_BASE_URL =
	"https://rn-shop-c3f27-default-rtdb.europe-west1.firebasedatabase.app/";
const FIREBASE_ENDING = ".json";

const PRODUCTS_COLLECTION = "products";
const HEADER_CONTENT_TYPE_APPLN_JSON = { "Content-Type": "application/json" };
const METHOD_POST = "POST";
const METHOD_PUT = "PUT";
const METHOD_DELETE = "DELETE";

// Firebase urls always end with .json
const buildFirebaseUrl = (dataLocation) => {
	return FIREBASE_BASE_URL + dataLocation + FIREBASE_ENDING;
};

const getProductAsync = () => {};

const deleteProductAsync = async (productId) => {
	console.log("About to DELETE product, with ID: ", productId);
	return fetch(buildFirebaseUrl(PRODUCTS_COLLECTION + `/${productId}`), {
		method: METHOD_DELETE,
	})
		.then((response) => {
			console.log("delete RESPONSE: ", response.ok);
			let status = { status: false, message: "Delete failed." };
			if (response.ok) {
				status = { status: true, message: "Deleted succeeded OK" };
			}
			return status;
		})

		.catch((err) => {
			console.error("Error in fetch call.. ", err);
			throw err;
		});
};

const updateProductAsync = async (product) => {
	console.log("About to UPDATE product: ", product);
	return fetch(buildFirebaseUrl(PRODUCTS_COLLECTION + `/${product.id}`), {
		method: METHOD_PUT,
		headers: HEADER_CONTENT_TYPE_APPLN_JSON,
		body: JSON.stringify(product),
	})
		.then((response) => response.json())
		.then((jsonData) => jsonData)
		.catch((err) => {
			console.error("Error in fetch call.. ", err);
			throw err;
		});
};

const addProductAsync = async (product) => {
	console.log("About to CREATE product: ", product);
	return fetch(buildFirebaseUrl(PRODUCTS_COLLECTION), {
		method: METHOD_POST,
		headers: HEADER_CONTENT_TYPE_APPLN_JSON,
		body: JSON.stringify(product),
	})
		.then((response) => response.json())
		.then((jsonData) => jsonData)
		.catch((err) => {
			console.error("Error in fetch call.. ", err);
			throw err;
		});
};

export {
	addProductAsync,
	deleteProductAsync,
	getProductAsync,
	updateProductAsync,
};
