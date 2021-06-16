import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../../_core/interactors/redux/reducers";
import { UiMiddleware } from "../../_core/interactors/redux/middleware/UiMiddleware";
import { LoggerMiddleware } from "../../_core/interactors/redux/middleware/LoggerMiddleware";

const middlewares = [thunk, LoggerMiddleware, UiMiddleware];

function buildStore(initialState) {
	if (!initialState) {
		initialState = {
			products: {},
			cart: {},
			orders: [],
			loggedInUser: 1,
			ui: {},
		};
	}

	const store = createStore(
		reducers,
		initialState,
		applyMiddleware(...middlewares)
	);

	return store;
}

export { buildStore };
