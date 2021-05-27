export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

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

export { updateProductAction };
