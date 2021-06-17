import React from "react";
import { Platform, Alert } from "react-native";
import { Item } from "react-navigation-header-buttons";
import IonHeaderButtons from "./IonHeaderButtons";

const SaveButton = ({ onPress }) => {
	let icon = "save";
	const platformIcon = Platform.OS === "ios" ? "ios-" + icon : "md-" + icon;

	return (
		<IonHeaderButtons>
			<Item title="Save" iconName={platformIcon} onPress={onPress} />
		</IonHeaderButtons>
	);
};

export default SaveButton;
