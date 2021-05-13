import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { Theme, ThemeStyles } from "../styles/Theme";

const OrderItem = ({ product, quantity }) => {
	return (
		<View style={styles.orderItem} key={product.id}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<View style={{ flex: 1 }}>
					<Image
						style={{ width: 50, height: 50 }}
						source={{ uri: product.image }}
					/>
				</View>
				<View style={{ flex: 3 }}>
					<Text style={ThemeStyles.text}>{product.title}</Text>
					<Text style={ThemeStyles.text}>Quantity: {quantity}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	orderItem: {
		width: "100%",
		padding: 5,
		marginTop: 5,
	},
});
export default OrderItem;
