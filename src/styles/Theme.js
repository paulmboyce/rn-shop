import { StyleSheet } from "react-native";

/* For Transparency on HEX codes, "CC" = 80% "80" = 50% 
   see https://css-tricks.com/8-digit-hex-codes/
 */
const Colors = {
	primaryColor: "#e91e63",
	primaryColor80Transparent: "#e91e63" + "CC",
	secondaryColor: "#a41ee9",
	secondaryColor80Transparent: "#a41ee9" + "CC",
	backgroundColor: "linen",
	cancelColor: "#ccc",
};

const Theme = {
	primaryColor: Colors.primaryColor,
	primaryColor80Transparent: Colors.primaryColor80Transparent,
	secondaryColor: Colors.secondaryColor,
	secondaryColor80Transparent: Colors.secondaryColor80Transparent,
	backgroundColor: Colors.backgroundColor,
	headerBackgroundColor: Colors.primaryColor,
	cancelColor: Colors.cancelColor,
	shadowColor: Colors.shadow,
	shadowOffset: { height: 2, width: 0 },
	shadowOpacity: 0.26,
	shadowRadius: 5,
	elevation: 6,
	shadowBorderRadius: 10,
};

const ThemeStyles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Theme.backgroundColor,
	},
	box1: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	box1end: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	box2: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	box2Left: {
		flex: 2,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	navigationHeaderStyleIOS: {},
	navigationHeaderStyleAndroid: {
		backgroundColor: Theme.headerBackgroundColor,
	},
	text: {
		fontFamily: "OpenSans",
	},
	textBold: {
		fontFamily: "OpenSansBold",
	},
	textTitle: {
		fontFamily: "OpenSansBold",
		color: Theme.primaryColor,
		fontSize: 22,
		paddingVertical: 10,
	},
	textTitleSmall: {
		fontFamily: "OpenSansBold",
		color: Theme.secondaryColor,
		fontSize: 18,
		paddingVertical: 7,
	},
	shadowBorder: {
		shadowColor: Theme.shadowColor,
		shadowOffset: Theme.shadowOffset,
		shadowOpacity: Theme.shadowOpacity,
		shadowRadius: Theme.shadowRadius,
		backgroundColor: Theme.backgroundColor,
		elevation: Theme.elevation,
		borderRadius: Theme.shadowBorderRadius,
	},
});

export { Theme, ThemeStyles };
