import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import defaultNavigationOptions from "./DefaultNavigationOptions";
import ShopScreen from "../screens/ShopScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { Theme } from "../styles/Theme";

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
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: defaultNavigationOptions,
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === "ios" ? "ios-home" : "md-home"}
					size={23}
					color={drawerConfig.tintColor}
				/>
			),
		},
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
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === "ios" ? "ios-list-circle" : "md-list-circle"}
					size={23}
					color={drawerConfig.tintColor}
				/>
			),
		},
	}
);

const drawerNavigator = createDrawerNavigator(
	{
		Shop: {
			screen: appNavigator,
			navigationOptions: {
				drawerLabel: "Main Shop",
			},
		},
		Settings: {
			screen: settingsNavigator,
			navigationOptions: {
				drawerLabel: "My Orders",
			},
		},
	},
	{
		drawerBackgroundColor: Theme.cancelColor,
		drawerType: "slide",
		hideStatusBar: "true",
		contentOptions: {
			activeTintColor: Theme.primaryColor,
			activeBackgroundColor: "black",
			itemsContainerStyle: {
				marginVertical: 40,
			},
			iconContainerStyle: {
				opacity: 1,
			},
		},
	}
);

export default createAppContainer(drawerNavigator);
