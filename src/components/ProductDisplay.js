import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Image,
	useWindowDimensions,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

import { Theme, ThemeStyles } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";
import EditableText from "../components/themed/EditableText";

const ProductDisplay = ({ product, onPressAddToCart, editMode }) => {
	const window = useWindowDimensions();

	const [title, setTitle] = useState(product.title);
	const [price, setPrice] = useState(product.price);
	const [description, setDescription] = useState(product.description);

	const styles = StyleSheet.create({
		productDetailImage: {
			width: window.width * 0.99,
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

	return (
		<KeyboardAvoidingView
			enabled={true}
			behavior={Platform.OS === "ios" ? "position" : "padding"}
			keyboardVerticalOffset={50}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<Image
						style={styles.productDetailImage}
						source={{
							uri: product.image,
						}}
					/>
					<EditableText
						style={ThemeStyles.textTitle}
						initialValue={product.title}
						editMode={editMode}
						onChangeValue={setTitle}
						multiline
					/>

					<View style={styles.addCartButtonContainerTop}>
						<View
							style={{ flexDirection: "row", justifyContent: "space-around" }}
						>
							<Text style={ThemeStyles.textBold}>Price: $</Text>
							<EditableText
								style={ThemeStyles.textBold}
								initialValue={product.price}
								editMode={editMode}
								onChangeValue={setPrice}
								keyboardType={"decimal-pad"}
							/>
						</View>

						<ButtonAction
							title="Add to cart"
							onPress={() => {
								onPressAddToCart(product.id);
							}}
						/>
					</View>
					<EditableText
						style={ThemeStyles.textMedium}
						initialValue={product.description}
						editMode={editMode}
						onChangeValue={setDescription}
						multiline
					/>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default ProductDisplay;
