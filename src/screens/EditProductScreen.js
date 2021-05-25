import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ProductDisplay from "../components/ProductDisplay";
import { Theme, ThemeStyles } from "../styles/Theme";

const EditProductScreen = ({ navigation }) => {
	const productId = navigation.getParam("productId");
	const product = useSelector((state) =>
		state.products.find((p) => p.id === productId)
	);

	console.log("EDIT PRODUCT: ", product);

	const onPressAddToCart = () => {
		alert("Can't add to cart while editing a product!");
	};

	return (
		<View style={ThemeStyles.screenEdit}>
			<Text>Hello Edit Product Screen !</Text>
			<View style={ThemeStyles.box1}>
				<ProductDisplay product={product} onPressAddToCart={onPressAddToCart} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default EditProductScreen;
