import React, { useEffect, useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductDisplay from "../components/ProductDisplay";
import { Theme, ThemeStyles } from "../styles/Theme";
import SaveButton from "../navigation/SaveButton";
import Product from "../models/Product";
import * as productActions from "../redux/actions/ProductActions";

const getProductTemplate = () => {
	return new Product(
		"New product name",
		999.99,
		"Your compelling sales description...",
		"unspecified category",
		"https://kaboompics.com/cache/c/f/6/b/6/cf6b6cacf84b4f782afa3dac17e7f6c138ab9961.jpeg"
	);
};

const EditProductScreen = ({ navigation }) => {
	console.log("Render EditProductScreen...");
	const dispatch = useDispatch();
	const [isValid, setIsValid] = useState(false);

	const setDataValidationStatus = (val) => {
		console.log("setDataValidationStatus => ", val);
		setIsValid(val);
	};
	const productId = navigation.getParam("productId");

	let product;
	if (!productId) {
		product = getProductTemplate();
	} else {
		product = useSelector((state) => state.products[productId]);
	}

	const [editProduct, setEditProduct] = useState(product);

	useEffect(() => {
		navigation.setParams({ onPressSave: saveProduct });
	}, [editProduct, saveProduct]);

	const saveProduct = useCallback(() => {
		console.log("saveProduct(): ", isValid, editProduct);
		if (!isValid) {
			Alert.alert(
				"Please Fix Errors!",
				"There are errors in your changes. Please fix errors and try again."
			);
			return;
		}
		dispatch(productActions.updateProductAction(editProduct));
		navigation.goBack();
	}, [editProduct, isValid]);

	const handleProductChanges = useCallback((change) => {
		setEditProduct((current) => {
			return { ...current, ...change };
		});
	});

	const onPressAddToCart = () => {
		alert("Can't add to cart while editing a product!");
	};

	return (
		<ScrollView style={styles.scroll}>
			<View style={ThemeStyles.screenEdit}>
				<ProductDisplay
					product={editProduct}
					onPressAddToCart={onPressAddToCart}
					editMode={true}
					onEditProduct={handleProductChanges}
					onValidateChanges={(val) => {
						console.log("Called onValidateChanges(): ", val);
						setIsValid(val);
					}}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scroll: { backgroundColor: Theme.cancelColor },
});

EditProductScreen.navigationOptions = ({ navigation }) => {
	const hasId = navigation.getParam("productId");
	const onPressSave = navigation.getParam("onPressSave");

	return {
		title: hasId ? "Edit Product" : "Add Product",
		headerRight: () => (
			<SaveButton navigation={navigation} onPress={onPressSave} />
		),
	};
};

export default EditProductScreen;
