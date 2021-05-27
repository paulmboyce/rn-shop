import React, { useEffect, useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import ProductDisplay from "../components/ProductDisplay";
import { Theme, ThemeStyles } from "../styles/Theme";
import SaveButton from "../navigation/SaveButton";

const EditProductScreen = ({ navigation }) => {
	const productId = navigation.getParam("productId");
	const product = useSelector((state) => state.products[productId]);

	const [editProduct, setEditProduct] = useState(product);

	useEffect(() => {
		navigation.setParams({ title: product.title });
	}, [product]);

	useEffect(() => {
		console.log("useEffect() pass onSaveProduct() to Navigation..");
		navigation.setParams({ onSaveProduct: onSaveProduct });
	}, [editProduct, onSaveProduct]);

	const onSaveProduct = useCallback(() => {
		return editProduct;
	});

	const handleProductChanges = useCallback((change) => {
		setEditProduct((current) => {
			return { ...current, ...change };
		});
		const updatedProduct = { ...editProduct, ...change };
		return updatedProduct;
	});

	const onPressAddToCart = () => {
		alert("Can't add to cart while editing a product!");
	};

	return (
		<ScrollView style={styles.scroll}>
			<View style={ThemeStyles.screenEdit}>
				<ProductDisplay
					product={product}
					onPressAddToCart={onPressAddToCart}
					editMode={true}
					onEditProduct={handleProductChanges}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scroll: { backgroundColor: Theme.cancelColor },
});

EditProductScreen.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam("title");
	const onSaveProduct = navigation.getParam("onSaveProduct");

	return {
		title: title ? title : "Editing Product",
		headerRight: () => (
			<SaveButton navigation={navigation} saveProduct={onSaveProduct} />
		),
	};
};

export default EditProductScreen;
