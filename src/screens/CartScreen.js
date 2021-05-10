import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

const CartScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>This is Cart Screen</Text>
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

export default CartScreen;
