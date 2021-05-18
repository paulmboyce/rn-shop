import React from "react";
import { Platform } from "react-native";
import { Item } from "react-navigation-header-buttons";

import IonHeaderButtons from "./IonHeaderButtons";

const CartButton = ({ navigation }) => {
	return (
		<IonHeaderButtons>
			<Item
				title="Menu"
				iconName={
					Platform.OS === "ios" ? "ios-cart-outline" : "md-cart-outline"
				}
				onPress={() => {
					navigation.navigate("Cart");
				}}
			/>
		</IonHeaderButtons>
	);
};

export default CartButton;
