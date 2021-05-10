import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

const OrdersScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>This is Orders Screen</Text>
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

OrdersScreen.navigationOptions = {
	title: "Order History",
};
export default OrdersScreen;
