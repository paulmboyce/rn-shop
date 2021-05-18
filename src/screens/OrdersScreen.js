import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { ThemeStyles, Theme } from "../styles/Theme";
import OrderItem from "../components/OrderItem";
import ButtonAction from "../components/themed/ButtonAction";
import ButtonActionSmall from "../components/themed/ButtonActionSmall";
import MenuButton from "../navigation/MenuButton";

const getProduct = (allProducts, productId) => {
	return allProducts.find((product) => product.id === productId);
};

const OrdersScreen = (props) => {
	console.log("RENDER ORDERS SCREEN...");
	const allOrders = useSelector((state) => state.orders);
	const allProducts = useSelector((state) => state.products);
	const userId = useSelector((state) => state.loggedInUser);

	const renderOrderItems = (order) => {
		console.log("RNDER ORDER: ", order);
		return order.items.map(({ productId, quantity }) => {
			const product = getProduct(allProducts, productId);
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
	const renderOrder = () => {
		return allOrders.map((order) => {
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
								title="Hide Details"
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
					{renderOrderItems(order)}
				</View>
			);
		});
	};
	return (
		<ScrollView>
			<View style={ThemeStyles.screen}>
				<Text style={ThemeStyles.textTitle}>My Order History</Text>
				{renderOrder()}
				<View style={styles.buttonContainer}>
					<ButtonAction
						title="Continue shopping"
						onPress={() => {
							props.navigation.navigate("Home");
						}}
					/>
				</View>
			</View>
		</ScrollView>
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
	buttonContainer: {
		paddingVertical: 50,
	},
});

OrdersScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Order History",
		headerLeft: () => <MenuButton navigation={navigation} />,
	};
};

export default OrdersScreen;
