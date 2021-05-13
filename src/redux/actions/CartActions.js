export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const CREATE_ORDER = "CREATE_ORDER";
export const CLEAR_CART = "CLEAR_CART";

export const addToCartAction = (productId) => {
	return (dispatch, getState) => {
		dispatch({
			type: ADD_TO_CART,
			payload: {
				productId,
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

export const createOrderAction = (cart) => {
	return (dispatch, getState) => {
		console.log("Dispatching cart order: ", cart);
		cart.orderDate = String(Date.now());
		cart.orderId = String(Math.random());
		dispatch({
			type: CREATE_ORDER,
			payload: { cart },
		});
		dispatch(clearCartAction());
	};
};

export const clearCartAction = () => {
	return (dispatch, getState) => {
		console.log("Clearing cart...");
		dispatch({
			type: CLEAR_CART,
			payload: {
				userId: getState().loggedInUser,
			},
		});
	};
};
