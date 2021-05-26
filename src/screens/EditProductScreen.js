import React, { useEffect, useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import ProductDisplay from "../components/ProductDisplay";
import { Theme, ThemeStyles } from "../styles/Theme";
import SaveButton from "../navigation/SaveButton";

const EditProductScreen = ({ navigation }) => {
	const productId = navigation.getParam("productId");
	const product = useSelector((state) =>
		state.products.find((p) => p.id === productId)
	);
	const [editProduct, setEditProduct] = useState(product);
	console.log("RENDER: EdidProductScreen ...");

	useEffect(() => {
		navigation.setParams({ title: product.title });
	}, [product]);

	useEffect(() => {
		console.log("useEffect() pass onSaveProduct() to Navigation: ");
		navigation.setParams({ onSaveProduct: onSaveProduct });
	}, [editProduct, onSaveProduct]);

	const onSaveProduct = useCallback(() => {
		console.log("EditProductScreen.onSaveProduct():", editProduct);
		//		return editProduct;
	});

	const handleProductChanges = useCallback((change) => {
		console.log("CURRENT PRODUCT: ", editProduct);
		console.log("PRODUCT CHANGE: ", change);
		setEditProduct((current) => {
			return { ...current, ...change };
		});
		const updatedProduct = { ...editProduct, ...change };
		console.log("PRODUCT with CHANGEs: ", updatedProduct);
		return updatedProduct;
	});

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
						onEditProduct={handleProductChanges}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scroll: { backgroundColor: Theme.cancelColor, paddingHorizontal: 20 },
});

EditProductScreen.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam("title");
	let onSaveProduct = () => {
		console.warn("onSaveProduct not found on Navigation!!!");
	};
	onSaveProduct = navigation.getParam("onSaveProduct");
	console.log("onSaveProduct", typeof onSaveProduct);
	return {
		title: title ? title : "Editing Product",
		headerRight: () => (
			<SaveButton navigation={navigation} saveProduct={onSaveProduct} />
		),
	};
};

export default EditProductScreen;
