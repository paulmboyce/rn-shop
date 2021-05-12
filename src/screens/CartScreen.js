import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	Button,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import { ThemeStyles, Theme } from "../styles/Theme";
import Card from "../components/Card";
import ButtonAction from "../components/themed/ButtonAction";

const getCartForUser = (carts, loggedInUser) => {
	return carts.find((cart) => cart.userId === loggedInUser);
};

const getCartProduct = (cartProducts, productId) => {
	return cartProducts.find((product) => product.id === productId);
};

const showProductScreen = (navigation, product) => {
	navigation.navigate("Product", {
		productId: product.id,
		title: product.title,
	});
};

const CartScreen = (props) => {
	const cart = useSelector((state) =>
		getCartForUser(state.carts, state.loggedInUser)
	);
	const allProducts = useSelector((state) => state.products);

	const cartProductIds = cart.items.map((item) => item.productId);
	const cartProducts = allProducts.filter((product) =>
		cartProductIds.includes(product.id)
	);

	const window = useWindowDimensions();
	const renderItems = () => {
		return cart.items.map((item) => {
			const cartProduct = getCartProduct(cartProducts, item.productId);
			return (
				<TouchableOpacity
					key={item.productId}
					onPress={() => {
						showProductScreen(props.navigation, cartProduct);
					}}
				>
					<Card style={styles.cartItemContainer}>
						<View style={styles.cartItem}>
							<View style={ThemeStyles.box1}>
								<View style={styles.cartItemImageContainer}>
									<Image
										style={styles.cartItemImage}
										source={{ uri: cartProduct.image }}
									/>
								</View>
							</View>
							<View style={{ ...ThemeStyles.box3left, paddingLeft: 20 }}>
								<Text style={ThemeStyles.text}>{cartProduct.title}</Text>
								<Text></Text>
								<Text style={ThemeStyles.text}>
									Price per item:&nbsp;
									<Text style={ThemeStyles.textBold}>${cartProduct.price}</Text>
								</Text>
								<Text style={ThemeStyles.text}>
									Quantity&nbsp;
									<Text style={ThemeStyles.textBold}>{item.quantity}</Text>
								</Text>
							</View>
						</View>
					</Card>
				</TouchableOpacity>
			);
		});
	};

	const renderTotal = () => {
		let subTotal = 0;
		cart.items.map((item) => {
			const cartProduct = getCartProduct(cartProducts, item.productId);
			subTotal += cartProduct.price * item.quantity;
		});
		return subTotal;
	};
	const renderItemCount = () => {
		let count = 0;
		cart.items.map((item) => {
			count += item.quantity;
		});
		return count;
	};

	const styles = StyleSheet.create({
		totalContainer: {
			paddingVertical: 10,
		},
		cartItemContainer: {
			minHeight: 10,
			width: window.width * 0.9,
		},
		cartItem: {
			flexDirection: "row",
		},
		cartItemImage: {
			width: 70,
			height: 70,
			paddingVertical: 50,
		},
	});

	return (
		<ScrollView style={{ backgroundColor: Theme.backgroundColor }}>
			<View style={ThemeStyles.screen}>
				<View style={ThemeStyles.box1left}>
					<View style={styles.totalContainer}>
						<Text style={ThemeStyles.textLarge}>
							Subtotal: ${renderTotal()}
						</Text>
					</View>
				</View>
				<View style={ThemeStyles.box1}>
					<ButtonAction
						style={{
							width: window.width * 0.9,
							paddingVertical: 10,
							marginBottom: 10,
						}}
						title={"Proceed to Checkout (" + renderItemCount() + " items)"}
						onPress={() => console.log("ACTION: startCheckoutAction(cart)")}
					/>
				</View>
				<View style={ThemeStyles.box2end}>{renderItems()}</View>
			</View>
		</ScrollView>
	);
};

CartScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Cart",
		headerLeft: () => (
			<MaterialHeaderButtons>
				<Item
					title="Menu"
					iconName="menu"
					onPress={() => {
						navigation.toggleDrawer();
					}}
				/>
			</MaterialHeaderButtons>
		),
	};
};
export default CartScreen;
