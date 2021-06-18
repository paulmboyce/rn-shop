import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
	reducers,
	UiMiddleware,
	LoggerMiddleware,
} from "../../_middle/controllers";

const middlewares = [thunk, LoggerMiddleware, UiMiddleware];

function buildStore(initialState) {
	if (initialState) {
		console.log("Test set initialState as: ==> ", initialState);
	}

	const store = createStore(
		reducers,
		initialState,
		applyMiddleware(...middlewares)
	);

	return store;
}

export { buildStore };
