import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	useWindowDimensions,
} from "react-native";

import { Theme, ThemeStyles } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";

const ProductDisplay = ({ product, onPressAddToCart }) => {
	const window = useWindowDimensions();

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
		<View>
			<Image
				style={styles.productDetailImage}
				source={{
					uri: product.image,
				}}
			/>
			<Text style={ThemeStyles.textTitle}>{product.title}</Text>
			<View style={styles.addCartButtonContainerTop}>
				<Text style={ThemeStyles.textBold}>Price: ${product.price}</Text>
				<ButtonAction
					title="Add to cart"
					onPress={() => {
						onPressAddToCart(product.id);
					}}
				/>
			</View>
			<Text style={ThemeStyles.textMedium}>{product.description}</Text>
		</View>
	);
};

export default ProductDisplay;
