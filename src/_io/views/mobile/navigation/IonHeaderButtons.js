import * as React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";

import { Theme } from "../styles/Theme";

const buttonColor =
	Platform.OS === "ios" ? Theme.primaryColor : Theme.backgroundColor;

/**
 * Set defaults for IconComponent, color, sizes, even OverflowIcon.
 */
const IonHeaderButton = (props) => (
	<HeaderButton
		{...props}
		IconComponent={Ionicons}
		iconSize={23}
		color={buttonColor}
	/>
);

/**
 * HeaderButtonComponent takes a template HeaderButton component
 */
const IonHeaderButtons = (props) => {
	return <HeaderButtons {...props} HeaderButtonComponent={IonHeaderButton} />;
};

export default IonHeaderButtons;
