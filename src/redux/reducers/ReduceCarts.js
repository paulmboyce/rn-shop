import {
	ADD_TO_CART,
	DECREMENT_QUANTITY,
	DELETE_FROM_CART,
	INCREMENT_QUANTITY,
} from "../actions/CartActions";

const defaultCart = [
	{
		id: 2,
		userId: 2,
		date: "2020-03-05T00:00:02.000Z",
		items: [
			{
				productId: 5,
				quantity: 1,
			},
			{
				productId: 7,
				quantity: 2,
			},
			{
				productId: 9,
				quantity: 0,
			},
		],
	},
	{
		id: 1,
		userId: 1,
		date: "2020-03-02T00:00:02.000Z",
		items: [
			{
				productId: 1,
				quantity: 2,
			},
			{
				productId: 2,
				quantity: 3,
			},
		],
	},
];

const reduceCarts = (oldState = defaultCart, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_CART: {
			console.log("reduceCarts: ", ADD_TO_CART, payload);
			const newState = [...oldState];
			const cart = newState.find((cart) => cart.userId === payload.userId);

			let item = cart.items.find(
				(item) => item.productId === payload.productId
			);

			if (item) {
				item.quantity++;
			} else {
				item = {
					productId: payload.productId,
					quantity: 1,
				};
				cart.items.push(item);
			}
			//			console.log("NEW CART STATE: ", newState);
			return newState;
		}
		case DELETE_FROM_CART: {
			console.log("reduceCarts: ", DELETE_FROM_CART);
		}
		case INCREMENT_QUANTITY: {
			console.log("reduceCarts: ", INCREMENT_QUANTITY);
		}
		case DECREMENT_QUANTITY: {
			console.log("reduceCarts: ", DECREMENT_QUANTITY);
		}

		default:
			return oldState;
	}
};

export default reduceCarts;
