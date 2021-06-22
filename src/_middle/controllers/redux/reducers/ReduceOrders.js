import { CREATE_ORDER } from "../actions/ActionTypes";

const reduceOrders = (oldState = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_ORDER:
			const newState = [...oldState];
			newState.push(payload.order);
			return newState;

		default: {
			return oldState;
		}
	}
};

export default reduceOrders;
