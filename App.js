import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import AppNavigator from "./src/navigation/Navigation";
import reduceProducts from "./src/redux/reducers/ReduceProducts";

const reduxStore = createStore(
	combineReducers({
		products: reduceProducts,
	})
);

export default function App() {
	console.log("Loading app... (no pre-caching)");
	return (
		<Provider store={reduxStore}>
			<AppNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
