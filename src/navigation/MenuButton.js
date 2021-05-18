import React from "react";
import { Platform } from "react-native";
import { Item } from "react-navigation-header-buttons";

import IonHeaderButtons from "./IonHeaderButtons";

const MenuButton = ({ navigation }) => {
	return (
		<IonHeaderButtons>
			<Item
				title="Menu"
				iconName={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
				onPress={() => {
					navigation.toggleDrawer();
				}}
			/>
		</IonHeaderButtons>
	);
};

export default MenuButton;
