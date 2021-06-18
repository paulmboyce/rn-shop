import React from "react";
import { View } from "react-native";

import { ThemeStyles } from "../styles/Theme";

const CardSimple = () => {
	return (
		<View
			style={{
				...ThemeStyles.shadowBorder,
				...props.style,
			}}
		>
			{props.children}
		</View>
	);
};

export default CardSimple;
