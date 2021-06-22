import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	INCREMENT_QUANTITY,
	DECREMENT_QUANTITY,
} from "./ActionTypes";

export const addToCartAction = (productId) => {
	return (dispatch, getState) => {
		const price = getProductPrice(getState(), productId);

		dispatch({
			type: ADD_TO_CART,
			payload: {
				productId,
				productPrice: price,
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

function getProductPrice(state, productId) {
	return state.products[productId].price;
}
