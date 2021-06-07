import React, { useState, useEffect, useReducer } from "react";
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
import { formReducer, reduceFormAction } from "../forms/ProductForm";

const ProductDisplay = ({
	product,
	onPressAddToCart,
	editMode,
	onEditProduct,
	onValidateChanges,
}) => {
	const window = useWindowDimensions();

	const [image, setImage] = useState(product.image);

	const [formState, formDispatch] = useReducer(formReducer, {
		values: {
			title: product.title,
			description: product.description,
			price: product.price,
		},
		checks: {
			title: { valid: true, err: null },
			description: { valid: true, err: null },
			price: { valid: true, err: null },
		},
	});

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
			onEditProduct(formState.values);
		}
	}, [formState.values]);

	useEffect(() => {
		if (editMode) {
			for (const field in formState.checks) {
				if (!formState.checks[field].valid) {
					onValidateChanges(false);
					return;
				}
			}
			onValidateChanges(true);
		}
	}, [formState.checks]);

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
								initialValue={formState.values.title}
								editMode={editMode}
								onChangeValue={(val) => {
									formDispatch(reduceFormAction("title", val));
								}}
								isValid={formState.checks.title.valid}
								errorMessage={formState.checks.title.err}
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
										initialValue={formState.values.price}
										editMode={editMode}
										onChangeValue={(val) => {
											formDispatch(reduceFormAction("price", val));
										}}
										keyboardType="decimal-pad"
										isValid={formState.checks.price.valid}
										errorMessage={formState.checks.price.err}
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
								initialValue={formState.values.description}
								editMode={editMode}
								onChangeValue={(val) => {
									formDispatch(reduceFormAction("description", val));
								}}
								multiline={true}
								isValid={formState.checks.description.valid}
								errorMessage={formState.checks.description.err}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default ProductDisplay;
