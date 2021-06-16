import { Platform } from "react-native";

import { Theme } from "../styles/Theme";

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Theme.primaryColor : "white",
	},
	headerTintColor: Platform.OS === "android" ? "white" : Theme.primaryColor,
	headerTitleStyle: {
		fontWeight: "bold",
	},
};

export default defaultNavigationOptions;
