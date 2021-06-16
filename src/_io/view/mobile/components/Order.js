import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import OrderItem from "./OrderItem";
import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonActionSmall from "./themed/ButtonActionSmall";

const Order = ({ order }) => {
	console.log("RENDER ORDER: ", order);
	const allProducts = useSelector((state) => state.products);
	const [showItems, setShowItems] = useState(false);

	const renderOrderItems = (order) => {
		return order.items.map(({ productId, quantity }) => {
			const product = allProducts[productId];
			return (
				<OrderItem
					key={productId}
					product={product}
					quantity={quantity}
					orderId={order.id}
				/>
			);
		});
	};

	return (
		<View style={styles.orderItemContainer} key={order.id}>
			<Text style={ThemeStyles.textMediumPrimaryBold}>
				Date:&nbsp;
				{new Date(Number.parseInt(order.date)).toDateString()}
			</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "flex-end",
				}}
			>
				<View style={{ flex: 2 }}>
					<Text style={ThemeStyles.textMedium}>
						Order Total: ${order.total}
					</Text>
				</View>
				<View style={{ flex: 1 }}>
					<ButtonActionSmall
						onPress={() => setShowItems((value) => !value)}
						title={showItems ? "Hide Details" : "Show Details"}
						buttonStyle={{
							paddingVertical: 0,
							paddingHorizontal: 3,
							backgroundColor: "white",
							borderWidth: 0.5,
							overflow: "hidden",
						}}
					/>
				</View>
			</View>
			{showItems && renderOrderItems(order)}
		</View>
	);
};

const styles = StyleSheet.create({
	orderItemContainer: {
		width: "90%",
		borderWidth: 2,
		borderRadius: 5,
		borderColor: Theme.cancelColor,
		marginVertical: 5,
		padding: 10,
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
	},
});

export default Order;
