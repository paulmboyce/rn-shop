import React from "react";
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import defaultNavigationOptions from "./DefaultNavigationOptions";
import ShopScreen from "../screens/ShopScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import UserProductsScreen from "../screens/UserProductsScreen";
import EditProductScreen from "../screens/EditProductScreen";
import { Theme } from "../styles/Theme";

import Badge from "../components/Badge";

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

const cartNavigator = createStackNavigator(
	{
		Cart: {
			screen: CartScreen,
		},
	},
	{
		initialRouteName: "Cart",
		defaultNavigationOptions: defaultNavigationOptions,
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
					size={23}
					color={drawerConfig.tintColor}
				/>
			),
		},
	}
);

const shopAdminNavigator = createStackNavigator(
	{
		Products: {
			screen: UserProductsScreen,
		},
		Edit: {
			screen: EditProductScreen,
		},
	},
	{
		initialRouteName: "Products",
		defaultNavigationOptions: defaultNavigationOptions,
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={
						Platform.OS === "ios" ? "ios-settings-sharp" : "md-settings-sharp"
					}
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

		Admin: {
			screen: shopAdminNavigator,
			navigationOptions: {
				drawerLabel: "My Products",
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

const bottomTabNavigator = createMaterialBottomTabNavigator(
	{
		Home: {
			screen: drawerNavigator,
			navigationOptions: {
				tabBarLabel: "All Products",
				tabBarIcon: (props) => (
					<Ionicons
						name={Platform.OS === "ios" ? "ios-home" : "md-home"}
						size={23}
						color={props.tintColor}
					/>
				),
				tabBarOnPress: (props) => {
					console.log("Pressed 'My Shopping' tab: ");
					props.navigation.navigate("Home");
				},
			},
		},
		Orders: {
			screen: settingsNavigator,
			navigationOptions: {
				tabBarLabel: "My Orders",
				tabBarIcon: (props) => (
					<Ionicons
						name={Platform.OS === "ios" ? "ios-list" : "md-list"}
						size={23}
						color={props.tintColor}
					/>
				),
			},
		},
		Checkout: {
			screen: cartNavigator,
			navigationOptions: {
				tabBarLabel: "Cart",
				tabBarColor: Platform.OS === "ios" ? "#e3fff8" : Theme.primaryColorTone,
				tabBarIcon: (props) => {
					return <Badge tintColor={props.tintColor} />;
				},
			},
		},
	},
	{
		initialRouteName: "Home",
		shifting: true,
		labeled: true,
		activeColor: Platform.OS === "ios" ? Theme.secondaryColor : "white",
		inactiveColor: Platform.OS === "ios" ? Theme.primaryColor : "white",
		barStyle: {
			backgroundColor: Platform.OS === "ios" ? "white" : Theme.primaryColor,
			borderTopWidth: 1,
			borderTopColor: Theme.cancelColor,
		},
	}
);

export default createAppContainer(bottomTabNavigator);
