const FIREBASE_BASE_URL =
	"https://rn-shop-c3f27-default-rtdb.europe-west1.firebasedatabase.app/";
const FIREBASE_ENDING = ".json";

const PRODUCTS_COLLECTION = "products";
const HEADER_CONTENT_TYPE_APPLN_JSON = { "Content-Type": "application/json" };
const METHOD_POST = "POST";
const METHOD_PUT = "PUT";
const METHOD_GET = "GET";
const METHOD_DELETE = "DELETE";

// Firebase urls always end with .json
const buildFirebaseUrl = (dataLocation) => {
	return FIREBASE_BASE_URL + dataLocation + FIREBASE_ENDING;
};

const getProductAsync = async (id) => {};
const getProductsAsync = async () => {
	return fetch(buildFirebaseUrl(PRODUCTS_COLLECTION), {
		method: METHOD_GET,
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("getProductsAsync() -> Read from Firebase failed.");
			}
			return response.json();
		})
		.then((responseJson) => {
			console.log("get all products got This data: ", responseJson);
			if (responseJson) return responseJson;
			return {};
		})
		.catch((err) => {
			console.error("Error in getProductsAsync() fetch call... ", err);
			throw err;
		});
};

const deleteProductAsync = async (id) => {
	console.log("About to DELETE product, with ID: ", id);
	return fetch(buildFirebaseUrl(PRODUCTS_COLLECTION + `/${id}`), {
		method: METHOD_DELETE,
	})
		.then((response) => {
			let status = { status: false, message: "Delete from Firebase failed." };
			if (response.ok) {
				status = { status: true, message: "Delete from Firebase succeeded OK" };
			}
			return status;
		})

		.catch((err) => {
			console.error("Error in fetch call.. ", err);
			throw err;
		});
};

const updateProductAsync = async (id, changes) => {
	console.log("About to UPDATE product: ", changes);
	return fetch(buildFirebaseUrl(PRODUCTS_COLLECTION + `/${id}`), {
		method: METHOD_PUT,
		headers: HEADER_CONTENT_TYPE_APPLN_JSON,
		body: JSON.stringify(changes),
	})
		.then((response) => response.json())
		.then((jsonData) => jsonData)
		.catch((err) => {
			console.error("Error in updateProductAsync() fetch call.. ", err);
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
	getProductsAsync,
	updateProductAsync,
};
