import { StyleSheet } from "react-native";

/* For Transparency on HEX codes, "CC" = 80% "80" = 50% 
   see https://css-tricks.com/8-digit-hex-codes/
 */
const Colors = {
	primaryColor: "#009a9a", // "#e91e63",
	primaryColorTone: "#008181",
	secondaryColor: "#a41ee9",
	actionColor: "#FF9900", // SEE: https://brandpalettes.com/amazon-color-codes/
	backgroundColor: "white",
	cancelColor: "#ccc",
	textColor: "black",
};

const TransparentColors = {
	primaryColor80: Colors.primaryColor + "CC",
	primaryColorTone80: Colors.primaryColorTone + "CC",
	secondaryColor80: Colors.secondaryColor + "CC",
	actionColor80: Colors.actionColor + "CC",
};

const Theme = {
	primaryColor: Colors.primaryColor,
	primaryColor80Transparent: TransparentColors.primaryColor80,
	primaryColorTone: Colors.primaryColorTone,
	primaryColorTone80Transparent: TransparentColors.primaryColorTone80,
	secondaryColor: Colors.secondaryColor,
	secondaryColor80Transparent: TransparentColors.secondaryColor80,
	actionColor: Colors.actionColor,
	actionColor80Transparent: TransparentColors.actionColor80,
	backgroundColor: Colors.backgroundColor,
	headerBackgroundColor: Colors.primaryColor,
	cancelColor: Colors.cancelColor,
	textColor: Colors.textColor,
	blackColor: "black",
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
	screenEdit: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Theme.cancelColor,
	},
	box1: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	box1left: {
		flex: 1,
		justifyContent: "flex-start",
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
	box2left: {
		flex: 2,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	box3: {
		flex: 3,
		justifyContent: "center",
		alignItems: "center",
	},
	box3left: {
		flex: 3,
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
	textPrimary: {
		fontFamily: "OpenSans",
		color: Theme.primaryColor,
	},
	textMedium: {
		fontFamily: "OpenSans",
		fontSize: 18,
	},
	textMediumPrimary: {
		fontFamily: "OpenSans",
		fontSize: 18,
		color: Theme.primaryColor,
	},
	textMediumPrimaryBold: {
		fontFamily: "OpenSansBold",
		fontSize: 18,
		color: Theme.primaryColor,
	},
	textMediumCalm: {
		fontFamily: "OpenSans",
		fontSize: 18,
		color: Theme.cancelColor,
	},
	textMediumBold: {
		fontFamily: "OpenSansBold",
		fontSize: 18,
	},
	textLarge: {
		fontFamily: "OpenSansBold",
		fontSize: 24,
	},
	textBold: {
		fontFamily: "OpenSansBold",
	},
	textBoldLarge: {
		fontFamily: "OpenSansBold",
		fontSize: 24,
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
	inputTextActive: {
		padding: 4,
		borderRadius: 5,
		borderColor: Theme.actionColor,
		borderWidth: 0.5,
		backgroundColor: "white",
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
	buttonContainer: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Theme.actionColor,
		fontFamily: Theme.fontFamily,
		padding: 8,
		borderRadius: 5,
		overflow: "hidden",
	},
	button: {
		fontSize: 18,
		color: Theme.textColor,
	},
	cancelButton: {
		fontSize: 18,
		color: Theme.textColor,
		backgroundColor: Theme.cancelColor,
		borderColor: Theme.textColor,
		borderWidth: 1,
	},
});

export { Theme, ThemeStyles };
