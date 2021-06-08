export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

import {
	addProductAsync,
	deleteProductAsync,
	getProductAsync,
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
		const saveProduct = extractFields(product);
		const response = await addProductAsync(saveProduct);
		console.log("response: ", response);
		saveProduct.id = response.name;

		dispatch({
			type: UPDATE_PRODUCT,
			payload: {
				product: saveProduct,
			},
		});
	};
};

const updateProductAction = (product) => {
	return async (dispatch) => {
		const response = await updateProductAsync(product);
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

export { updateProductAction, addProductAction, deleteProductAction };
