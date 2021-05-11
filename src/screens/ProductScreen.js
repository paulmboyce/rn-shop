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

const ProductScreen = (props) => {
	const productId = props.navigation.getParam("productId");
	const product = useSelector((state) =>
		state.products.find((p) => p.id === productId)
	);

	const window = useWindowDimensions();

	const styles = StyleSheet.create({
		productDetailImage: {
			width: window.width,
			height: window.width,
		},
		addCartButtonContainer: {
			marginTop: 130,
		},
	});

	return (
		<ScrollView style={{ backgroundColor: Theme.backgroundColor }}>
			<View style={ThemeStyles.screen}>
				<View style={ThemeStyles.box2}>
					<Image
						style={styles.productDetailImage}
						source={{
							uri: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
						}}
					/>
					<Text>
						This is Product Screen for {productId} {product.title}
					</Text>
					<Text>${product.price}</Text>
					<Text>{product.description}</Text>
				</View>
				<View style={ThemeStyles.box1}>
					<View style={styles.addCartButtonContainer}>
						<Button
							title="ADD TO CART"
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
	return {
		title: "Product Details",

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
