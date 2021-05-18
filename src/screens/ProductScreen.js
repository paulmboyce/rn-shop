import React, { useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	Image,
	ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addToCartAction } from "../redux/actions/CartActions";
import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";
import CartButton from "../navigation/CartButton";

const ProductScreen = (props) => {
	const productId = props.navigation.getParam("productId");
	const product = useSelector((state) =>
		state.products.find((p) => p.id === productId)
	);
	const cartTotal = useSelector((state) => state.cart.total);

	const dispatch = useDispatch();
	const window = useWindowDimensions();

	useEffect(() => {
		props.navigation.setParams({ cartTotal: cartTotal });
	}, [cartTotal]);

	const styles = StyleSheet.create({
		productDetailImage: {
			width: window.width * 0.99,
			height: window.width * 0.99,
			marginBottom: 20,
		},
		addCartButtonContainer: {
			marginTop: 30,
			marginBottom: 50,
			width: window.width * 0.9,
			paddingHorizontal: 3,
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
					<View style={styles.addCartButtonContainerTop}>
						<Text style={ThemeStyles.textBold}>Price: ${product.price}</Text>
						<ButtonAction
							title="Add to cart"
							onPress={() => {
								console.log(`ACTION: addToCartAction(${productId})`);
								dispatch(addToCartAction(productId));
							}}
						/>
					</View>
					<Text style={ThemeStyles.textMedium}>{product.description}</Text>
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
		headerRight: () => <CartButton navigation={navigation} />,
	};
};

export default ProductScreen;
