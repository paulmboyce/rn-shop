import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { ThemeStyles, Theme } from "../styles/Theme";
import Order from "../components/Order";
import ButtonAction from "../components/themed/ButtonAction";
import MenuButton from "../navigation/MenuButton";

const OrdersScreen = (props) => {
	console.log("RENDER ORDERS SCREEN...");
	const allOrders = useSelector((state) => state.orders);
	const userId = useSelector((state) => state.loggedInUser);

	const renderOrder = () => {
		return allOrders.map((order) => <Order key={order.id} order={order} />);
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
							props.navigation.navigate("Shop");
						}}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
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
