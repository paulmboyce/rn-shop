import React from "react";
import { Text } from "react-native";

import { ThemeStyles } from "../../styles/Theme";

const ThemeText = (props) => {
	const style = { ...ThemeStyles.text, ...props.style };
	return (
		<Text {...props} style={style}>
			{props.children}
		</Text>
	);
};

export default ThemeText;
