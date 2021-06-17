import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";

import AppNavigator from "./src/_io/views/mobile/navigation/Navigation";
import { fetchAssetsAsync } from "./src/_io/views/mobile/utils/loadAsync";
import { reduxStore } from "./src/_io/frameworks";

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
