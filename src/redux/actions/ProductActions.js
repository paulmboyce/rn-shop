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

import { extractFields } from "../../utils/ProductFields";

const addProductAction = (product) => {
	return async (dispatch) => {
		dispatch(ui.showSpinnerAction());
		const response = await addProductAsync(extractFields(product));
		dispatch(ui.hideSpinnerAction());

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
