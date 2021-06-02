import React from "react";
import { View, useWindowDimensions } from "react-native";

import { ThemeStyles } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";

const ContinueShopping = ({ navigation }) => {
	const window = useWindowDimensions();
	return (
		<ButtonAction
			style={{
				width: window.width * 0.9,
				paddingVertical: window.height * 0.25,
				marginBottom: 10,
			}}
			title={"Continue shopping >>"}
			onPress={() => {
				console.log("ACTION: navigate to home");
				navigation.navigate("Home");
			}}
		/>
	);
};

export default ContinueShopping;
