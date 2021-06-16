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

import { addToCartAction } from "../../../../redux/actions/CartActions";
import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";
import CartButton from "../navigation/CartButton";
import ProductDisplay from "../components/ProductDisplay";
import ContinueShopping from "../components/ContinueShopping";

const ProductScreen = (props) => {
	const productId = props.navigation.getParam("productId");
	const product = useSelector((state) => state.products[productId]);
	const cartTotal = useSelector((state) => state.cart.total);

	const dispatch = useDispatch();
	const window = useWindowDimensions();

	useEffect(() => {
		props.navigation.setParams({ cartTotal: cartTotal });
	}, [cartTotal]);

	const styles = StyleSheet.create({
		addCartButtonContainer: {
			marginTop: 30,
			marginBottom: 50,
			width: window.width * 0.9,
			paddingHorizontal: 3,
		},
	});

	const onPressAddToCart = (productId) => {
		console.log(`ACTION: addToCartAction(${product.id})`);
		dispatch(addToCartAction(product.id));
	};

	if (!product) {
		return (
			<View style={ThemeStyles.screen}>
				<Text style={ThemeStyles.textMedium}>Product could not be found.</Text>
				<ContinueShopping navigation={props.navigation} />
			</View>
		);
	}

	return (
		<ScrollView style={{ backgroundColor: Theme.backgroundColor }}>
			<View style={ThemeStyles.screen}>
				<View style={ThemeStyles.box2}>
					<ProductDisplay
						product={product}
						onPressAddToCart={onPressAddToCart}
					/>
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
