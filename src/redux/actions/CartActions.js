export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const CREATE_ORDER = "CREATE_ORDER";
export const CLEAR_CART = "CLEAR_CART";

const getCartProduct = (products, productId) => {
	return products.find((product) => product.id === productId);
};

export const addToCartAction = (productId) => {
	return (dispatch, getState) => {
		const products = getState().products;
		const product = getCartProduct(products, productId);

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

export const createOrderAction = (cart) => {
	return (dispatch, getState) => {
		console.log("Dispatching cart order: ", cart);
		dispatch({
			type: CREATE_ORDER,
			payload: {
				order: {
					items: Object.values(cart.items),
					date: String(Date.now()),
					id: String(Math.random()),
					total: cart.total,
				},
			},
		});
	};
};
