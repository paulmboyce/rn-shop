import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

import { Theme, ThemeStyles } from "../../styles/Theme";

const ErrorMessageContainer = (props) => {
	const message = useSelector((state) => state.ui.error);

	if (!message) return null;

	return (
		<View style={styles.container}>
			<Text style={ThemeStyles.textErrorPrimaryBold}>{message}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		minHeight: 50,
		backgroundColor: Theme.errorBackgroundColor,
	},
});

export default ErrorMessageContainer;
