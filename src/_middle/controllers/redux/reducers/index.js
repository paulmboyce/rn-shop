import { combineReducers } from "redux";

import reduceProducts from "./ReduceProducts";
import reduceCart from "./ReduceCart";
import reduceOrders from "./ReduceOrders";
import reduceUi from "./ReduceUi";

const reducers = combineReducers({
	products: reduceProducts,
	cart: reduceCart,
	orders: reduceOrders,
	loggedInUser: () => 1,
	ui: reduceUi,
});

export { reducers };
