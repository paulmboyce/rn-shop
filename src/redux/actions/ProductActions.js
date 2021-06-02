export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

const updateProductAction = (product) => {
	return (dispatch) => {
		dispatch({
			type: UPDATE_PRODUCT,
			payload: {
				product,
			},
		});
	};
};

const deleteProductAction = (productId) => {
	return (dispatch) => {
		dispatch({
			type: DELETE_PRODUCT,
			payload: { productId },
		});
	};
};

export { updateProductAction, deleteProductAction };
