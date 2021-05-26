import React from "react";
import { Platform, Alert } from "react-native";
import { Item } from "react-navigation-header-buttons";

import { useSelector } from "react-redux";

import IonHeaderButtons from "./IonHeaderButtons";

const SaveButton = ({ navigation, saveProduct }) => {
	let icon = "save";

	const platformIcon = Platform.OS === "ios" ? "ios-" + icon : "md-" + icon;

	return (
		<IonHeaderButtons>
			<Item
				title="Save"
				iconName={platformIcon}
				onPress={() => {
					saveProduct();
				}}
			/>
		</IonHeaderButtons>
	);
};

export default SaveButton;
