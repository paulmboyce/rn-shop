import {
	ADD_TO_CART,
	DECREMENT_QUANTITY,
	DELETE_FROM_CART,
	INCREMENT_QUANTITY,
	CLEAR_CART,
} from "../actions/CartActions";

const DEFAULT_CART = {
	total: 0.0,
	items: {},
};
const calculateTotal = (items) => {
	let subTotal = 0;
	Object.values(items).map((item) => {
		subTotal += item.price * item.quantity;
	});
	return subTotal.toFixed(2);
};

const reduceCarts = (oldState = DEFAULT_CART, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_CART: {
			const newState = { ...oldState };

			let cartItem = newState.items[payload.productId];

			if (cartItem) {
				cartItem.quantity++;
			} else {
				cartItem = {
					productId: payload.productId,
					quantity: 1,
					price: payload.productPrice,
				};
				newState.items[payload.productId] = cartItem;
				newState.total += payload.productPrice;
			}

			return newState;
		}

		case DELETE_FROM_CART: {
			const newState = { ...oldState };

			const productItem = newState.items[payload.productId];
			delete newState.items[payload.productId];
			newState.total = calculateTotal(newState.items);

			return newState;
		}

		case DECREMENT_QUANTITY: {
			const newState = { ...oldState };
			const productItem = newState.items[payload.productId];

			// CASE: Decrement (usual)
			if (productItem.quantity > 0) {
				productItem.quantity--;
			}

			// CASE: Delete if zero
			if (productItem.quantity === 0) {
				delete newState.items[payload.productId];
			}
			newState.total = calculateTotal(newState.items);

			return newState;
		}

		case INCREMENT_QUANTITY: {
			const newState = { ...oldState };
			const productItem = newState.items[payload.productId];

			productItem.quantity++;
			newState.total = calculateTotal(newState.items);

			return newState;
		}

		case CLEAR_CART: {
			return {
				total: 0.0,
				items: {},
			};
		}

		default:
			return oldState;
	}
};

export default reduceCarts;
