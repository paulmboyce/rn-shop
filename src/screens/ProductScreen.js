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

const ProductScreen = (props) => {
	return (
		<View style={ThemeStyles.screen}>
			<Text>This is Product Screen</Text>
			<Button
				title="Back"
				onPress={() => {
					props.navigation.goBack();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

ProductScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Product Details",
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

export default ProductScreen;
