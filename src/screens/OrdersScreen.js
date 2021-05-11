import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Button,
	useWindowDimensions,
} from "react-native";

import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import { ThemeStyles } from "../styles/Theme";

const OrdersScreen = (props) => {
	return (
		<View style={ThemeStyles.screen}>
			<Text>This is Orders Screen</Text>
			<Button
				title="Continue Shopping"
				onPress={() => {
					props.navigation.navigate("Home");
				}}
			/>
		</View>
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