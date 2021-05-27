import React from "react";
import { Platform, Alert } from "react-native";
import { Item } from "react-navigation-header-buttons";

import { useSelector, useDispatch } from "react-redux";

import IonHeaderButtons from "./IonHeaderButtons";
import * as productActions from "../redux/actions/ProductActions";

const SaveButton = ({ navigation, saveProduct }) => {
	let icon = "save";
	const dispatch = useDispatch();

	const platformIcon = Platform.OS === "ios" ? "ios-" + icon : "md-" + icon;

	return (
		<IonHeaderButtons>
			<Item
				title="Save"
				iconName={platformIcon}
				onPress={() => {
					dispatch(productActions.updateProductAction(saveProduct()));
				}}
			/>
		</IonHeaderButtons>
	);
};

export default SaveButton;
