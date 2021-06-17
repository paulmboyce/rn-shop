import React from "react";
import { Platform } from "react-native";
import { Item } from "react-navigation-header-buttons";

import IonHeaderButtons from "./IonHeaderButtons";

const hasCartItems = (cartTotal) => {
	return !!Number.parseFloat(cartTotal);
};

const CartButton = ({ navigation }) => {
	let icon = "cart-outline";
	const cartTotal = navigation.getParam("cartTotal");
	if (hasCartItems(cartTotal) === true) {
		icon = "cart";
	}
	const platformIcon = Platform.OS === "ios" ? "ios-" + icon : "md-" + icon;

	return (
		<IonHeaderButtons>
			<Item
				title="Menu"
				iconName={platformIcon}
				onPress={() => {
					navigation.navigate("Cart");
				}}
			/>
		</IonHeaderButtons>
	);
};

export default CartButton;
