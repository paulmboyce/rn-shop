import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Button,
	useWindowDimensions,
	Image,
	ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";

const ProductScreen = (props) => {
	const productId = props.navigation.getParam("productId");
	const product = useSelector((state) =>
		state.products.find((p) => p.id === productId)
	);

	const window = useWindowDimensions();

	const styles = StyleSheet.create({
		productDetailImage: {
			width: window.width * 0.99,
			height: window.width * 0.99,
			marginBottom: 20,
		},
		addCartButtonContainer: {
			marginTop: 30,
		},
	});

	return (
		<ScrollView
			style={{ backgroundColor: Theme.backgroundColor, paddingHorizontal: 20 }}
		>
			<View style={ThemeStyles.screen}>
				<View style={ThemeStyles.box2}>
					<Image
						style={styles.productDetailImage}
						source={{
							uri: product.image,
						}}
					/>
					<Text style={ThemeStyles.textTitle}>{product.title}</Text>
					<Text style={ThemeStyles.text}>
						{product.description}
						{"  "}
						<Text style={ThemeStyles.textBold}>Price: ${product.price}</Text>
					</Text>
				</View>
				<View style={ThemeStyles.box1}>
					<View style={styles.addCartButtonContainer}>
						<ButtonAction
							title="Add to cart"
							onPress={() => {
								console.log(`ACTION: addToCartAction(${productId})`);
							}}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

ProductScreen.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam("title");
	return {
		title: title ? title : "Product Details",

		headerRight: () => (
			<MaterialHeaderButtons>
				<Item
					title="Cart"
					iconName="shopping-cart"
					onPress={() => {
						console.log("GO To CART...");
						navigation.navigate("Cart");
					}}
				/>
			</MaterialHeaderButtons>
		),
	};
};

export default ProductScreen;
