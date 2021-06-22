export const METHOD_GET = "GET";
export const METHOD_POST = "POST";
export const METHOD_PUT = "PUT";
export const METHOD_DELETE = "DELETE";

const FIREBASE_BASE_URL =
	"https://rn-shop-c3f27-default-rtdb.europe-west1.firebasedatabase.app/";
const FIREBASE_ENDING = ".json";

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

export { useFirebaseApi };
