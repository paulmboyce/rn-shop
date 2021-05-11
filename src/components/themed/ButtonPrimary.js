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

const ButtonPrimary = (props) => {
	const content = props.children || props.title || "";
	return (
		<ButtonTouchable {...props}>
			<View style={{ ...ThemeStyles.buttonContainer, ...props.style }}>
				<ThemeText {...props} style={{ ...ThemeStyles.button }}>
					{content}
				</ThemeText>
			</View>
		</ButtonTouchable>
	);
};

export default ButtonPrimary;
