import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

const ShopScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>This is Shop Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ShopScreen;
