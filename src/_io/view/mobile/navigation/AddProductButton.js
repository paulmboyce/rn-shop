import React from "react";
import { Platform, Alert } from "react-native";
import { Item } from "react-navigation-header-buttons";

import { useSelector, useDispatch } from "react-redux";

import IonHeaderButtons from "./IonHeaderButtons";

const AddProductButton = ({ navigation }) => {
	let icon = "add-circle-outline";
	const dispatch = useDispatch();

	const platformIcon = Platform.OS === "ios" ? "ios-" + icon : "md-" + icon;

	return (
		<IonHeaderButtons>
			<Item
				title="Add"
				iconName={platformIcon}
				onPress={() => {
					navigation.navigate("EditProduct");
				}}
			/>
		</IonHeaderButtons>
	);
};

export default AddProductButton;
