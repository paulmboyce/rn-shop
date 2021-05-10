import * as React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";

import { Theme } from "../styles/Theme";

const buttonColor =
	Platform.OS === "ios" ? Theme.primaryColor : Theme.backgroundColor;

/**
 * Set defaults for IconComponent, color, sizes, even OverflowIcon.
 */
const MaterialHeaderButton = (props) => (
	<HeaderButton
		{...props}
		IconComponent={MaterialIcons}
		iconSize={23}
		color={buttonColor}
	/>
);

/**
 * HeaderButtonComponent takes a template HeaderButton component
 */
const MaterialHeaderButtons = (props) => {
	return (
		<HeaderButtons {...props} HeaderButtonComponent={MaterialHeaderButton} />
	);
};

export default MaterialHeaderButtons;
