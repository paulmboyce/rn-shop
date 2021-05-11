import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";

import AppNavigator from "./src/navigation/Navigation";
import reduceProducts from "./src/redux/reducers/ReduceProducts";
import { fetchAssetsAsync } from "./src/utils/loadAsync";
const reduxStore = createStore(
	combineReducers({
		products: reduceProducts,
	})
);

export default function App() {
	console.log("Loading app... (no pre-caching)");
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
