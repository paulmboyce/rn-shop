import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

const ProductScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>This is Product Screen</Text>
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

export default ProductScreen;
