import { CREATE_ORDER } from "../actions/ActionTypes";

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
