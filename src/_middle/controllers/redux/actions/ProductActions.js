import {
	CREATE_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	GET_ALL_PRODUCTS,
} from "../actions/ActionTypes";

import {
	addProductAsync,
	deleteProductAsync,
	getProductAsync,
	getProductsAsync,
	updateProductAsync,
} from "../../../gateways/apis/ProductStoreInterface";

import * as ui from "./UiActions";

import { extractFields } from "../../../../_outer/views/mobile/utils/ProductFields";

const createProductAction = (product) => {
	return async (dispatch) => {
		try {
			dispatch(ui.showSpinnerAction());
			const response = await addProductAsync(extractFields(product));
			dispatch({
				type: CREATE_PRODUCT,
				payload: {
					id: response.name,
					product: { ...product, id: response.name },
				},
			});
		} catch (err) {
			dispatch(ui.showErrorAction(err.message));
		} finally {
			dispatch(ui.hideSpinnerAction());
		}
	};
};

const updateProductAction = (product) => {
	return async (dispatch) => {
		try {
			dispatch(ui.showSpinnerAction());
			await updateProductAsync(product.id, extractFields(product));
			dispatch({
				type: UPDATE_PRODUCT,
				payload: {
					product,
				},
			});
		} catch (err) {
			dispatch(ui.showErrorAction(err.message));
		} finally {
			dispatch(ui.hideSpinnerAction());
		}
	};
};

const deleteProductAction = (productId) => {
	return async (dispatch) => {
		try {
			dispatch(ui.showSpinnerAction());
			await deleteProductAsync(productId);
			dispatch({
				type: DELETE_PRODUCT,
				payload: { productId },
			});
		} catch (err) {
			dispatch(ui.showErrorAction(err.message));
		} finally {
			dispatch(ui.hideSpinnerAction());
		}
	};
};

const getProductsAction = () => {
	return async (dispatch) => {
		try {
			dispatch(ui.showSpinnerAction());
			const products = await getProductsAsync();
			dispatch({
				type: GET_ALL_PRODUCTS,
				payload: { products: products ? products : [] },
			});
		} catch (err) {
			dispatch(ui.showErrorAction(err.message));
		} finally {
			dispatch(ui.hideSpinnerAction());
		}
	};
};

export {
	updateProductAction,
	createProductAction,
	deleteProductAction,
	getProductsAction,
};
