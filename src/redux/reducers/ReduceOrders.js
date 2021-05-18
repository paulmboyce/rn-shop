import { CREATE_ORDER } from "../actions/CartActions";

const reduceOrders = (oldState = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_ORDER:
			console.log("Entered CREATE_ORDER ==>", payload.order);
			const newState = [...oldState];
			newState.push(payload.order);
			return newState;

		default: {
			return oldState;
		}
	}
};

export default reduceOrders;
