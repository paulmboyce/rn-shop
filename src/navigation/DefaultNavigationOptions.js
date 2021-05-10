import { Platform } from "react-native";

import { Theme } from "../styles/Theme";

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Theme.primaryColor : "",
	},
	headerTintColor: Platform.OS === "android" ? "" : Theme.primaryColor,
	headerTitleStyle: {
		fontWeight: "bold",
	},
};

export default defaultNavigationOptions;
