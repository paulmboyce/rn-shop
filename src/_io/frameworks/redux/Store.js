import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
/** IMPORTANT: remove composeWithDevTools() for production */
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../../../_adapters/controllers/redux/reducers";
import { UiMiddleware } from "../../../_adapters/controllers/redux/middleware/UiMiddleware";
import { LoggerMiddleware } from "../../../_adapters/controllers/redux/middleware/LoggerMiddleware";

const middleware = [thunk, UiMiddleware];

console.log("NODE_ENV is:  [", process.env.NODE_ENV, "]");
if (process.env.NODE_ENV !== "production") {
	middleware.push(LoggerMiddleware);
}

const reduxStore = createStore(
	reducers,
	/** IMPORTANT: remove composeWithDevTools() for production */
	composeWithDevTools(applyMiddleware(...middleware))
);

export default reduxStore;
