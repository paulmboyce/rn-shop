import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import thunk from "redux-thunk";

import AppNavigator from "./src/navigation/Navigation";
import reduceProducts from "./src/redux/reducers/ReduceProducts";
import reduceCarts from "./src/redux/reducers/ReduceCarts";
import { fetchAssetsAsync } from "./src/utils/loadAsync";
const reduxStore = createStore(
	combineReducers({
		products: reduceProducts,
		carts: reduceCarts,
		loggedInUser: () => 1,
	}),
	applyMiddleware(thunk)
);

export default function App() {
	console.log("Loading app...");
	const [isCacheLoaded, setIsCacheLoaded] = useState(false);

	if (!isCacheLoaded) {
		return (
			<AppLoading
				startAsync={fetchAssetsAsync}
				onFinish={() => setIsCacheLoaded(true)}
				onError={console.warn}
			/>
		);
	}

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
