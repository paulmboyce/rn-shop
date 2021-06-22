import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	INCREMENT_QUANTITY,
	DECREMENT_QUANTITY,
} from "../actions/ActionTypes";

export const UserIdMiddleware = ({ dispatch, getState }) => {
	return (next) => {
		return (action) => {
			switch (action.type) {
				case ADD_TO_CART:
				case DELETE_FROM_CART:
				case INCREMENT_QUANTITY:
				case DECREMENT_QUANTITY:
					console.log("[UserIdMiddleware] adding [userId] to payload.");
					action.payload.userId = getState().loggedInUser;
					break;
				default:
			}
			return next(action);
		};
	};
};
