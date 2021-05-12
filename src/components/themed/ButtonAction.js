import React from "react";
import {
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

import ThemeText from "./ThemeText";
import { ThemeStyles } from "../../styles/Theme";

let ButtonTouchable = TouchableOpacity;
if (Platform.OS === "android" && Platform.Version >= 21) {
	ButtonTouchable = TouchableNativeFeedback;
}
/**
 *
 * @param {textStyle} allows to customise the style of the text in the button
 * @param {buttonStyle} allows to custom the button background
 */
const ButtonAction = (props) => {
	const content = props.children || props.title || "";
	return (
		<ButtonTouchable {...props}>
			<View style={{ ...ThemeStyles.buttonContainer, ...props.buttonStyle }}>
				<ThemeText
					{...props}
					style={{ ...ThemeStyles.button, ...props.textStyle }}
				>
					{content}
				</ThemeText>
			</View>
		</ButtonTouchable>
	);
};

export default ButtonAction;
