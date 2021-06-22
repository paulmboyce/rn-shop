import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	INCREMENT_QUANTITY,
	DECREMENT_QUANTITY,
	CREATE_ORDER,
	DELETE_PRODUCT,
} from "../actions/ActionTypes";

import { CartInteractor } from "../../../../_core/usecases/CartInteractor";

const DEFAULT_CART = {
	total: 0.0,
	items: {},
	numItems: 0,
};

function calcCartTotals(items = { key: "", value: { price: 0, quantity: 0 } }) {
	const cartItems = Object.values(items);
	const cartInteractor = new CartInteractor();

	return {
		total: cartInteractor.calculateTotal(cartItems),
		numItems: cartInteractor.calcNumItems(cartItems),
	};
}

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
			}

			const { total, numItems } = calcCartTotals(Object.values(newState.items));
			newState.total = total;
			newState.numItems = numItems;

			return newState;
		}

		// There two cases handled same:
		case DELETE_PRODUCT:
		case DELETE_FROM_CART: {
			const newState = { ...oldState };
			const productItem = newState.items[payload.productId];
			if (productItem) {
				delete newState.items[payload.productId];

				const { total, numItems } = calcCartTotals(newState.items);
				newState.total = total;
				newState.numItems = numItems;
			}

			return newState;
		}

		case DECREMENT_QUANTITY: {
			const newState = { ...oldState };
			const productItem = newState.items[payload.productId];

			if (productItem.quantity > 0) {
				productItem.quantity--;
			}

			// SPECIAL CASE: Delete if zero
			if (productItem.quantity === 0) {
				delete newState.items[payload.productId];
			}

			const { total, numItems } = calcCartTotals(newState.items);
			newState.total = total;
			newState.numItems = numItems;

			return newState;
		}

		case INCREMENT_QUANTITY: {
			const newState = { ...oldState };
			const productItem = newState.items[payload.productId];

			productItem.quantity++;

			const { total, numItems } = calcCartTotals(newState.items);
			newState.total = total;
			newState.numItems = numItems;

			return newState;
		}

		case CREATE_ORDER: {
			return {
				total: 0.0,
				items: {},
				numItems: 0,
			};
		}

		default:
			return oldState;
	}
};

export default reduceCarts;
