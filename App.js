import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import thunk from "redux-thunk";

/** IMPORTANT: remove composeWithDevTools() for production */
import { composeWithDevTools } from "redux-devtools-extension";

import AppNavigator from "./src/navigation/Navigation";
import { fetchAssetsAsync } from "./src/utils/loadAsync";
import reducers from "./src/redux/reducers";

const reduxStore = createStore(
	reducers,
	/** IMPORTANT: remove composeWithDevTools() for production */
	composeWithDevTools(applyMiddleware(thunk))
);

export default function App() {
	console.log("Loading app...");
	const [isCacheLoaded, setIsCacheLoaded] = useState(false);

	console.log(
		"**IMPORTANT**: [App.js] Remove composeWithDevTools() for production	"
	);
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
