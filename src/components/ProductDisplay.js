import React, { useState, useEffect } from "react";
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
						/>
						<View style={{ paddingHorizontal: 10 }}>
							<EditableText
								style={ThemeStyles.textTitle}
								initialValue={title}
								editMode={editMode}
								onChangeValue={setTitle}
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
										keyboardType={"decimal-pad"}
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
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default ProductDisplay;
