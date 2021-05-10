import React from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	Button,
} from "react-native";

import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import { ThemeStyles } from "../styles/Theme";

const ShopScreen = (props) => {
	return (
		<View style={ThemeStyles.screen}>
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

const styles = StyleSheet.create({});

ShopScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Browse Shop",
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
		headerRight: () => (
			<MaterialHeaderButtons>
				<Item
					title="Cart"
					iconName="shopping-cart"
					onPress={() => {
						console.log("GO To CART...");
						navigation.navigate("Cart");
					}}
				/>
			</MaterialHeaderButtons>
		),
	};
};

export default ShopScreen;
