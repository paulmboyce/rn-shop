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
		userId: 10,
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
	const findItemByProductId = (item) => item.productId === payload.productId;
	const findCartByUserId = (cart) => cart.userId === payload.userId;

	switch (type) {
		case ADD_TO_CART: {
			const newState = [...oldState];

			let userCart = newState.find(findCartByUserId);

			if (!userCart) {
				userCart = {
					id: Math.random(),
					userId: payload.userId,
					date: Date.now(),
					items: [],
				};
				newState.push(userCart);
			}

			let cartItem = userCart.items.find(findItemByProductId);

			if (cartItem) {
				cartItem.quantity++;
			} else {
				cartItem = {
					productId: payload.productId,
					quantity: 1,
				};
				userCart.items.push(cartItem);
			}

			return newState;
		}

		case DELETE_FROM_CART: {
			const newState = [...oldState];

			const userCart = newState.find(findCartByUserId);
			const productItem = userCart.items.find(findItemByProductId);
			const index = userCart.items.indexOf(productItem);

			userCart.items.splice(index, 1);

			return newState;
		}

		case DECREMENT_QUANTITY: {
			const newState = [...oldState];
			const userCart = newState.find(findCartByUserId);
			const productItem = userCart.items.find(findItemByProductId);

			// CASE: Decrement (usual)
			if (productItem.quantity > 0) {
				productItem.quantity--;
			}

			// CASE: Delete if zero
			if (productItem.quantity === 0) {
				const index = userCart.items.indexOf(productItem);
				userCart.items.splice(index, 1);
			}

			return newState;
		}

		case INCREMENT_QUANTITY: {
			const newState = [...oldState];
			const userCart = newState.find(findCartByUserId);
			const productItem = userCart.items.find(findItemByProductId);

			productItem.quantity++;

			return newState;
		}

		default:
			return oldState;
	}
};

export default reduceCarts;
