export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

import {
	addProductAsync,
	deleteProductAsync,
	getProductAsync,
	getProductsAsync,
	updateProductAsync,
} from "../../api/ProductStoreInterface";

const extractFields = (product) => {
	return {
		title: product.title,
		price: product.price,
		description: product.description,
		category: product.category,
		image: product.image,
	};
};

const addProductAction = (product) => {
	return async (dispatch) => {
		const response = await addProductAsync(extractFields(product));
		console.log("response: ", response);

		dispatch({
			type: CREATE_PRODUCT,
			payload: {
				id: response.name,
				product: product,
			},
		});
	};
};

const updateProductAction = (product) => {
	return async (dispatch) => {
		const response = await updateProductAsync(
			product.id,
			extractFields(product)
		);
		console.log("response: ", response);

		dispatch({
			type: UPDATE_PRODUCT,
			payload: {
				product,
			},
		});
	};
};

const deleteProductAction = (productId) => {
	return async (dispatch) => {
		const response = await deleteProductAsync(productId);
		console.log("response: ", response);

		dispatch({
			type: DELETE_PRODUCT,
			payload: { productId },
		});
	};
};

const getProductsAction = () => {
	return async (dispatch) => {
		const products = await getProductsAsync();
		console.log("getProductsAction() ==> products: ", products);

		dispatch({
			type: GET_ALL_PRODUCTS,
			payload: { products },
		});
	};
};

export {
	updateProductAction,
	addProductAction,
	deleteProductAction,
	getProductsAction,
};
