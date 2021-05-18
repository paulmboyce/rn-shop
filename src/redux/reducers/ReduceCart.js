import {
	ADD_TO_CART,
	DECREMENT_QUANTITY,
	DELETE_FROM_CART,
	INCREMENT_QUANTITY,
	CLEAR_CART,
} from "../actions/CartActions";

const DEFAULT_CART = {
	total: 0.0,
	date: String(Date.now()),
	items: [],
};
const calculateTotal = (items) => {
	let subTotal = 0;
	items.map((item) => {
		subTotal += item.price * item.quantity;
	});
	return subTotal.toFixed(2);
};

const reduceCarts = (oldState = DEFAULT_CART, action) => {
	const { type, payload } = action;
	const findItemByProductId = (item) => item.productId === payload.productId;

	switch (type) {
		case ADD_TO_CART: {
			const newState = { ...oldState };

			let cartItem = newState.items.find(findItemByProductId);

			if (cartItem) {
				cartItem.quantity++;
			} else {
				cartItem = {
					productId: payload.productId,
					quantity: 1,
					price: payload.productPrice,
				};
				newState.items.push(cartItem);
				newState.total += payload.productPrice;
			}

			return newState;
		}

		case DELETE_FROM_CART: {
			const newState = { ...oldState };

			const productItem = newState.items.find(findItemByProductId);
			const index = newState.items.indexOf(productItem);

			newState.items.splice(index, 1);
			newState.total = calculateTotal(newState.items);

			return newState;
		}

		case DECREMENT_QUANTITY: {
			const newState = { ...oldState };
			const productItem = newState.items.find(findItemByProductId);

			// CASE: Decrement (usual)
			if (productItem.quantity > 0) {
				productItem.quantity--;
			}

			// CASE: Delete if zero
			if (productItem.quantity === 0) {
				const index = newState.items.indexOf(productItem);
				newState.items.splice(index, 1);
			}
			newState.total = calculateTotal(newState.items);

			return newState;
		}

		case INCREMENT_QUANTITY: {
			const newState = { ...oldState };
			const productItem = newState.items.find(findItemByProductId);

			productItem.quantity++;
			newState.total = calculateTotal(newState.items);

			return newState;
		}

		case CLEAR_CART:
			return DEFAULT_CART;

		default:
			return oldState;
	}
};

export default reduceCarts;
