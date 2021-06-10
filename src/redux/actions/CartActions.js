export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

export const addToCartAction = (productId) => {
	return (dispatch, getState) => {
		const products = getState().products;
		const product = products[productId];

		dispatch({
			type: ADD_TO_CART,
			payload: {
				productId,
				productPrice: product.price,
				userId: getState().loggedInUser,
			},
		});
	};
};

export const deleteFromCartAction = (productId) => {
	return (dispatch, getState) => {
		dispatch({
			type: DELETE_FROM_CART,
			payload: {
				productId: productId,
				userId: getState().loggedInUser,
			},
		});
	};
};
export const incrementCartAction = (productId) => {
	return (dispatch, getState) => {
		dispatch({
			type: INCREMENT_QUANTITY,
			payload: {
				productId: productId,
				userId: getState().loggedInUser,
			},
		});
	};
};

export const decrementCartAction = (productId) => {
	return (dispatch, getState) => {
		dispatch({
			type: DECREMENT_QUANTITY,
			payload: {
				productId: productId,
				userId: getState().loggedInUser,
			},
		});
	};
};
