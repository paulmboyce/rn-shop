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

import * as ui from "../actions/UiActions";

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
		dispatch(ui.showSpinnerAction());
		const response = await addProductAsync(extractFields(product));
		dispatch(ui.hideSpinnerAction());
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
		dispatch(ui.showSpinnerAction());
		const response = await updateProductAsync(
			product.id,
			extractFields(product)
		);
		dispatch(ui.hideSpinnerAction());
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
		dispatch(ui.showSpinnerAction());
		const response = await deleteProductAsync(productId);
		dispatch(ui.hideSpinnerAction());
		console.log("response: ", response);

		dispatch({
			type: DELETE_PRODUCT,
			payload: { productId },
		});
	};
};

const getProductsAction = () => {
	return async (dispatch) => {
		dispatch(ui.showSpinnerAction());
		const products = await getProductsAsync();
		dispatch(ui.hideSpinnerAction());
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
