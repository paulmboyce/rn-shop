import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ShopScreen from "../screens/ShopScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";

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
	}
);

export default createAppContainer(AppNavigator);
