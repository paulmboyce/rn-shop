import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
		<ScrollView style={styles.scroll}>
			<View style={ThemeStyles.screenEdit}>
				<View style={ThemeStyles.box1}>
					<ProductDisplay
						product={product}
						onPressAddToCart={onPressAddToCart}
						editMode={true}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scroll: { backgroundColor: Theme.cancelColor, paddingHorizontal: 20 },
});

export default EditProductScreen;
