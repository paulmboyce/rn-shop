import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Button,
	Image,
	useWindowDimensions,
	ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import { ThemeStyles } from "../styles/Theme";

const OrdersScreen = (props) => {
	console.log("RENDER ORDERS SCREEN...");
	const allOrders = useSelector((state) => state.orders);
	const userId = useSelector((state) => state.loggedInUser);

	const findOrderByUserId = (order) => order.userId === userId;
	const userOrders = allOrders.filter(findOrderByUserId);

	console.log("ORDERS for user: ", userOrders);

	const renderOrderItems = (order) => {
		return order.items.map((orderItem) => {
			return (
				<View key={orderItem.productId}>
					<Image
						style={{ width: 50, height: 50 }}
						source={{ uri: orderItem.image }}
					/>
					<Text style={ThemeStyles.Text}>
						Product {orderItem.productId}| Quantity {orderItem.quantity}
					</Text>
				</View>
			);
		});
	};
	const renderOrder = () => {
		return userOrders.map((order) => {
			return (
				<View key={order.id}>
					<Text style={ThemeStyles.Text}>
						Order Date:{order.date} DD MON YYYY
					</Text>
					<Text style={ThemeStyles.Text}>Order ID:{order.id} </Text>
					{renderOrderItems(order)}
					<Text style={ThemeStyles.Text}>Order Total: £___</Text>
				</View>
			);
		});
	};
	return (
		<ScrollView>
			<View style={ThemeStyles.screen}>
				<Text style={ThemeStyles.textTitle}>My Order History</Text>
				{renderOrder()}
				<Button
					title="Continue Shopping"
					onPress={() => {
						props.navigation.navigate("Home");
					}}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({});

OrdersScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Order History",
		headerLeft: () => (
			<MaterialHeaderButtons>
				<Item
					title="Menu"
					iconName="menu"
					onPress={() => {
						navigation.toggleDrawer();
					}}
				/>
			</MaterialHeaderButtons>
		),
	};
};

export default OrdersScreen;
