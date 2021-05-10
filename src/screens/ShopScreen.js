import React from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	Button,
} from "react-native";

const ShopScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>This is Shop Screen</Text>
			<Button
				title="Product"
				onPress={() => {
					props.navigation.navigate("Product");
				}}
			/>
			<Button
				title="Orders"
				onPress={() => {
					props.navigation.navigate("Orders");
				}}
			/>
			<Button
				title="Cart"
				onPress={() => {
					props.navigation.navigate("Cart");
				}}
			/>
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
