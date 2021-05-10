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

const CartScreen = (props) => {
	return (
		<View style={ThemeStyles.screen}>
			<Text>This is Cart Screen</Text>
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

CartScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Checkout",
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
export default CartScreen;
