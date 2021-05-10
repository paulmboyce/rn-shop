import React from "react";
import { Button, Platform } from "react-native";
import MaterialHeaderButtons from "./HeaderButtons";
import { Item } from "react-navigation-header-buttons";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import defaultNavigationOptions from "./DefaultNavigationOptions";
import ShopScreen from "../screens/ShopScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { ThemeStyles, Theme } from "../styles/Theme";

const appNavigator = createStackNavigator(
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
		defaultNavigationOptions: defaultNavigationOptions,
	}
);

const settingsNavigator = createStackNavigator(
	{
		Orders: {
			screen: OrdersScreen,
		},
	},
	{
		initialRouteName: "Orders",
		defaultNavigationOptions: defaultNavigationOptions,
	}
);

const drawerNavigator = createDrawerNavigator(
	{
		Shop: { screen: appNavigator },
		Settings: { screen: settingsNavigator },
	},
	{
		contentOptions: {
			activeTintColor: Theme.primaryColor,
			itemsContainerStyle: {
				marginVertical: 0,
			},
			iconContainerStyle: {
				opacity: 1,
			},
		},
	}
);

export default createAppContainer(drawerNavigator);
