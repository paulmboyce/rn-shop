import React from "react";
import { Button } from "react-native";
import MaterialHeaderButtons from "./HeaderButtons";
import { Item } from "react-navigation-header-buttons";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ShopScreen from "../screens/ShopScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { ThemeStyles, Theme } from "../styles/Theme";

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: ShopScreen,
		},
		Product: {
			screen: ProductScreen,
		},
		Cart: {
			screen: CartScreen,
		},
		Orders: {
			screen: OrdersScreen,
		},
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Theme.backgroundColor,
			},
			headerTintColor: Theme.primaryColor,
			headerTitleStyle: {
				fontWeight: "bold",
			},
			headerRight: () => (
				<MaterialHeaderButtons>
					<Item
						title="Cart"
						iconName="shopping-cart"
						onPress={() => {
							console.log("GO To CART...");
						}}
					/>
				</MaterialHeaderButtons>
			),
		},
	}
);

export default createAppContainer(AppNavigator);
