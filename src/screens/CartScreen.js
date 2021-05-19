import React from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonAction from "../components/themed/ButtonAction";
import CartItem from "../components/CartItem";
import ContinueShopping from "../components/ContinueShopping";
import { createOrderAction } from "../redux/actions/CartActions";
import MenuButton from "../navigation/MenuButton";

const getCartProduct = (allProducts, productId) => {
	return allProducts.find((product) => product.id === productId);
};

const showProductScreen = (navigation, product) => {
	navigation.navigate("Product", {
		productId: product.id,
		title: product.title,
	});
};

const CartScreen = (props) => {
	const cart = useSelector((state) => state.cart);
	const allProducts = useSelector((state) => state.products);
	const cartItemsArray = Object.values(cart.items);

	const window = useWindowDimensions();
	const dispatch = useDispatch();

	const renderItems = () => {
		if (cartItemsArray.length === 0) {
			return (
				<Text style={ThemeStyles.text}>
					No items found. Add a product to your cart!
				</Text>
			);
		}

		return cartItemsArray.map((cartItem) => {
			const cartProduct = getCartProduct(allProducts, cartItem.productId);
			return (
				<TouchableOpacity
					key={cartItem.productId}
					onPress={() => {
						showProductScreen(props.navigation, cartProduct);
					}}
				>
					<CartItem cartItem={cartItem} cartProduct={cartProduct} />
				</TouchableOpacity>
			);
		});
	};

	const renderItemCount = () => {
		let count = 0;
		cartItemsArray.map((item) => {
			count += item.quantity;
		});
		return count;
	};

	const styles = StyleSheet.create({
		totalContainer: {
			paddingVertical: 10,
		},
	});

	const renderStartCheckoutButton = () => {
		if (cartItemsArray.length > 0) {
			return (
				<View style={ThemeStyles.box1}>
					<ButtonAction
						style={{
							width: window.width * 0.9,
							paddingVertical: 10,
							marginBottom: 10,
						}}
						title={"Proceed to checkout (" + renderItemCount() + " items)"}
						onPress={() => {
							dispatch(createOrderAction(cart));
						}}
					/>
				</View>
			);
		}
	};
	return (
		<ScrollView style={{ backgroundColor: Theme.backgroundColor }}>
			<View style={ThemeStyles.screen}>
				<View style={ThemeStyles.box1left}>
					<View style={styles.totalContainer}>
						<Text style={ThemeStyles.textLarge}>
							Subtotal: ${Number.parseFloat(cart.total).toFixed(2)}
						</Text>
					</View>
				</View>
				{renderStartCheckoutButton()}

				<View style={ThemeStyles.box2end}>{renderItems()}</View>

				{(() => {
					if (cartItemsArray.length === 0) {
						return <ContinueShopping navigation={props.navigation} />;
					}
				})()}
			</View>
		</ScrollView>
	);
};

CartScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Cart",
		headerLeft: () => <MenuButton navigation={navigation} />,
	};
};
export default CartScreen;
