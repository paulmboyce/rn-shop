import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme, ThemeStyles } from "../styles/Theme";

const UserProductsScreen = (props) => {
	return (
		<View style={ThemeStyles.screen}>
			<Text>These are MY Products to sell!</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default UserProductsScreen;
