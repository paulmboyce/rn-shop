import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
	reducers,
	UiMiddleware,
	LoggerMiddleware,
} from "../../_adapters/controllers";

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
