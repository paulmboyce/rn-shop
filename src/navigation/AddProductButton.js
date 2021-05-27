import React from "react";
import { Platform, Alert } from "react-native";
import { Item } from "react-navigation-header-buttons";

import { useSelector, useDispatch } from "react-redux";

import IonHeaderButtons from "./IonHeaderButtons";
import * as productActions from "../redux/actions/ProductActions";

const AddProductButton = ({ navigation, saveProduct }) => {
	let icon = "add-circle-outline";
	const dispatch = useDispatch();

	const platformIcon = Platform.OS === "ios" ? "ios-" + icon : "md-" + icon;

	return (
		<IonHeaderButtons>
			<Item
				title="Add"
				iconName={platformIcon}
				onPress={() => {
					console.log("Navigate to Edit blank product");
					//					dispatch(productActions.updateProductAction(saveProduct()));
				}}
			/>
		</IonHeaderButtons>
	);
};

export default AddProductButton;
