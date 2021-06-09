import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

import { Theme, ThemeStyles } from "../../styles/Theme";

const PendingActivityIndicator = (props) => {
	const ui = useSelector((state) => state.ui);

	if (ui.pending) {
		return (
			<View style={{ ...styles.default }}>
				<ActivityIndicator size="large" color={Theme.primaryColor} />
			</View>
		);
	}
	return null;
};

const styles = StyleSheet.create({
	default: {
		justifyContent: "center",
		alignItems: "center",

		width: "100%",
		height: 80,
		backgroundColor: Theme.cancelColor,
	},
});
export default PendingActivityIndicator;
