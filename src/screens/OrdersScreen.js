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
import { ThemeStyles, Theme } from "../styles/Theme";
import OrderItem from "../components/OrderItem";

const getProduct = (allProducts, productId) => {
	return allProducts.find((product) => product.id === productId);
};

const OrdersScreen = (props) => {
	console.log("RENDER ORDERS SCREEN...");
	const allOrders = useSelector((state) => state.orders);
	const allProducts = useSelector((state) => state.products);
	const userId = useSelector((state) => state.loggedInUser);

	const findOrderByUserId = (order) => order.userId === userId;
	const userOrders = allOrders.filter(findOrderByUserId);

	const renderOrderItems = (order) => {
		return order.items.map(({ productId, quantity }) => {
			const product = getProduct(allProducts, productId);
			return <OrderItem product={product} quantity={quantity} />;
		});
	};
	const renderOrder = () => {
		return userOrders.map((order) => {
			return (
				<View style={styles.orderItemContainer} key={order.orderId}>
					<Text style={ThemeStyles.textMediumPrimaryBold}>
						Date:&nbsp;
						{new Date(Number.parseInt(order.date)).toDateString()}
					</Text>
					<Text style={ThemeStyles.textMedium}>Order Total: £___</Text>
					<Text style={ThemeStyles.text}>Order ID:{order.id} </Text>
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
