import React, { useEffect, useCallback, useState } from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductDisplay from "../components/ProductDisplay";
import PendingActivityIndicator from "../components/themed/PendingActivityIndicator";
import { Theme, ThemeStyles } from "../styles/Theme";
import SaveButton from "../navigation/SaveButton";
import Product from "../models/Product";
import {
	updateProductAction,
	createProductAction,
} from "../redux/actions/ProductActions";
import ErrorMessageContainer from "../components/themed/ErrorMessageContainer";

const MODE_NEW_PRODUCT = "MODE_NEW_PRODUCT";
const MODE_EXISTING_PRODUCT = "MODE_EXISTING_PRODUCT";
const ALERT_TITLE = "Please Fix Errors!";
const ALERT_MESSAGE =
	"There are errors in your changes. Please fix errors and try again.";

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
	const ui = useSelector((state) => state.ui);

	const setDataValidationStatus = (val) => {
		console.log("setDataValidationStatus => ", val);
		setIsValid(val);
	};

	const getProduct = (navigation) => {
		const productId = navigation.getParam("productId");
		let editMode, product;

		if (!productId) {
			editMode = MODE_NEW_PRODUCT;
			product = getProductTemplate();
		} else {
			editMode = MODE_EXISTING_PRODUCT;
			product = useSelector((state) => state.products[productId]);
		}
		return { editMode, product };
	};
	const { editMode, product } = getProduct(navigation);

	const [editProduct, setEditProduct] = useState(product);

	useEffect(() => {
		navigation.setParams({ onPressSave: saveProduct });
	}, [editProduct, saveProduct]);

	const saveProduct = useCallback(() => {
		if (!isValid) {
			return Alert.alert(ALERT_TITLE, ALERT_MESSAGE);
		}

		let saveAction = updateProductAction;
		if (editMode === MODE_NEW_PRODUCT) {
			saveAction = createProductAction;
		}
		dispatch(saveAction(editProduct));

		navigation.goBack();
	}, [editProduct, isValid, editMode, dispatch]);

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
			<ErrorMessageContainer />
			<PendingActivityIndicator />
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
