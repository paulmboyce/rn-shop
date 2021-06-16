import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import thunk from "redux-thunk";

/** IMPORTANT: remove composeWithDevTools() for production */
import { composeWithDevTools } from "redux-devtools-extension";

import AppNavigator from "./src/_io/view/mobile/navigation/Navigation";
import { fetchAssetsAsync } from "./src/utils/loadAsync";
import reducers from "./src/redux/reducers";
import { UiMiddleware } from "./src/redux/middleware/UiMiddleware";
import { LoggerMiddleware } from "./src/redux/middleware/LoggerMiddleware";

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

export default function App() {
	const [isCacheLoaded, setIsCacheLoaded] = useState(false);
	console.log("Loading app... cache is loaded: ", isCacheLoaded);

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
