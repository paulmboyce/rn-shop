import { CREATE_ORDER } from "../actions/CartActions";

const reduceOrders = (oldState = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_ORDER:
			console.log("Entered CREATE_ORDER ==>", payload.cart);
			const newState = [...oldState];
			newState.push(payload.cart);
			return newState;

		default: {
			return oldState;
		}
	}
};

export default reduceOrders;
