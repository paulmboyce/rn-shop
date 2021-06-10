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

const useFirebaseApi = ({ method, headers, collection = "", bodyData }) => {
	const options = { method: method, headers: headers };
	if (bodyData) options.body = JSON.stringify(bodyData);
	if (headers) options.headers = headers;

	return fetch(buildFirebaseUrl(collection), options)
		.then((response) => {
			if (!response.ok) {
				throw new Error("useFirebaseApi() -> Did not respond 200 OK");
			}
			return response.json();
		})
		.then((jsonData) => jsonData)
		.catch((err) => {
			console.log("Error in useFirebaseApi()... ", err);
			throw err;
		});
};

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
