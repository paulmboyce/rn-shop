import React, { useState, useEffect, isValidElement } from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
} from "react-native";

import { Theme, ThemeStyles } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";
import EditableText from "../components/themed/EditableText";
import EditableImage from "./themed/EditableImage";

const ProductDisplay = ({
	product,
	onPressAddToCart,
	editMode,
	onEditProduct,
	onValidateChanges,
}) => {
	const window = useWindowDimensions();

	const [title, setTitle] = useState(product.title);
	const [price, setPrice] = useState(product.price);
	const [description, setDescription] = useState(product.description);
	const [image, setImage] = useState(product.image);

	const styles = StyleSheet.create({
		productDetailImage: {
			width: "100%",
			height: window.width * 0.99,
			marginBottom: 20,
		},
		addCartButtonContainerTop: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			width: window.width * 0.9,
			paddingBottom: 20,
			paddingHorizontal: 3,
		},
	});

	useEffect(() => {
		if (editMode) {
			onEditProduct({ image });
		}
	}, [image]);

	useEffect(() => {
		if (editMode) {
			onEditProduct({ price });
		}
	}, [price]);

	useEffect(() => {
		if (editMode) {
			onEditProduct({ title });
		}
	}, [title]);

	useEffect(() => {
		if (editMode) {
			onEditProduct({ description });
		}
	}, [description]);

	const validateTitle = (title) => {
		let checks = { valid: true, err: null };
		if (title.length < 1) {
			checks = { valid: false, err: "Please enter a title" };
		}
		if (title.length > 10) {
			checks = { valid: false, err: "Max title length is 10 characters" };
		}
		onValidateChanges(checks.valid);
		return checks;
	};

	const validatePrice = (price) => {
		let checks = { valid: true, err: null };
		if (price.length < 1) {
			checks = { valid: false, err: "Please enter a price" };
		}
		if (price <= 0) {
			checks = { valid: false, err: "Price cannot be zero" };
		}
		onValidateChanges(checks.valid);
		return checks;
	};

	const validateDescription = (description) => {
		let checks = { valid: true, err: null };
		if (description.length < 1) {
			checks = { valid: false, err: "Please enter a description" };
		}
		if (description.length > 100) {
			checks = {
				valid: false,
				err: "Max description length is 100 characters",
			};
		}
		onValidateChanges(checks.valid);
		return checks;
	};

	return (
		<ScrollView>
			<KeyboardAvoidingView
				enabled={true}
				behavior={Platform.OS === "ios" ? "position" : "padding"}
				keyboardVerticalOffset={120}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						console.log("About to dsmiss keyboard...");
						Keyboard.dismiss;
					}}
				>
					<View>
						<EditableImage
							style={styles.productDetailImage}
							initialValue={image}
							editMode={editMode}
							onChangeValue={setImage}
							textContentType="URL"
						/>
						<View style={{ paddingHorizontal: 10 }}>
							<EditableText
								style={ThemeStyles.textTitle}
								initialValue={title}
								editMode={editMode}
								onChangeValue={setTitle}
								doValidate={validateTitle}
							/>

							<View style={styles.addCartButtonContainerTop}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-around",
									}}
								>
									<Text style={ThemeStyles.textBold}>Price: $</Text>
									<EditableText
										style={ThemeStyles.textBold}
										initialValue={price}
										editMode={editMode}
										onChangeValue={setPrice}
										keyboardType="decimal-pad"
										doValidate={validatePrice}
									/>
								</View>

								<ButtonAction
									title="Add to cart"
									buttonStyle={editMode ? ThemeStyles.cancelButton : {}}
									onPress={() => {
										onPressAddToCart(product.id);
									}}
								/>
							</View>
							<EditableText
								style={{
									...ThemeStyles.textMedium,
								}}
								initialValue={description}
								editMode={editMode}
								onChangeValue={setDescription}
								multiline={true}
								doValidate={validateDescription}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default ProductDisplay;
