import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppNavigator from "./src/navigation/Navigation";

export default function App() {
	console.log("Loading...");
	return <AppNavigator />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
