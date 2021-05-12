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
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import { ThemeStyles, Theme } from "../styles/Theme";
import Card from "../components/Card";
import ButtonAction from "../components/themed/ButtonAction";
import ButtonActionSmall from "../components/themed/ButtonActionSmall";
import ButtonIconSmall from "../components/themed/ButtonIconSmall";

import {
	deleteFromCartAction,
	decrementCartAction,
	incrementCartAction,
} from "../redux/actions/CartActions";

const getCartForUser = (carts, loggedInUser) => {
	let cart = carts.find((cart) => cart.userId === loggedInUser);
	if (cart === undefined) {
		console.log("No cart found for user, creating empty cart...");
		cart = {
			id: Math.random(),
			userId: loggedInUser,
			date: Date.now(),
			items: [],
		};
	}
	return cart;
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
	console.log("RENDER CART..");
	const carts = useSelector((state) => state.carts);
	const userId = useSelector((state) => state.loggedInUser);
	const allProducts = useSelector((state) => state.products);

	const cart = getCartForUser(carts, userId);
	const cartProductIds = cart.items.map((item) => item.productId);
	const cartProducts = allProducts.filter((product) =>
		cartProductIds.includes(product.id)
	);

	const window = useWindowDimensions();
	const dispatch = useDispatch();

	const renderItems = () => {
		if (cart.items.length === 0) {
			return (
				<Text style={ThemeStyles.text}>
					No items found. Add a product to your cart!
				</Text>
			);
		}

		return cart.items.map((cartItem) => {
			const cartProduct = getCartProduct(cartProducts, cartItem.productId);
			return (
				<TouchableOpacity
					key={cartItem.productId}
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
								<Text style={ThemeStyles.text}>
									Item price:&nbsp;
									<Text style={ThemeStyles.textBold}>${cartProduct.price}</Text>
								</Text>
								<Text></Text>

								<View
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "flex-start",
										alignItems: "center",
									}}
								>
									<Text style={ThemeStyles.text}>
										Quantity&nbsp;
										<Text style={ThemeStyles.textBold}>
											{cartItem.quantity}&nbsp;
										</Text>
									</Text>
									<ButtonIconSmall
										onPress={() => {
											dispatch(decrementCartAction(cartItem.productId));
										}}
									>
										<MaterialIcons name="remove" size={16} color="black" />
									</ButtonIconSmall>
									<ButtonIconSmall
										onPress={() => {
											dispatch(incrementCartAction(cartItem.productId));
										}}
									>
										<MaterialIcons name="add" size={16} color="black" />
									</ButtonIconSmall>
									<View style={{ marginLeft: 10 }}>
										<ButtonActionSmall
											onPress={() => {
												dispatch(deleteFromCartAction(cartItem.productId));
											}}
											title="Delete"
											buttonStyle={{
												paddingVertical: 0,
												paddingHorizontal: 3,
												backgroundColor: "white",
												borderWidth: 0.5,
												overflow: "hidden",
											}}
										/>
									</View>
								</View>
							</View>
						</View>
					</Card>
				</TouchableOpacity>
			);
		});
	};

	const renderTotal = () => {
		let subTotal = 0;

		if (cart.items.length === 0) {
			return subTotal;
		}
		cart.items.map((item) => {
			const cartProduct = getCartProduct(cartProducts, item.productId);
			subTotal += cartProduct.price * item.quantity;
		});
		return Number.parseFloat(subTotal).toFixed(2);
	};
	const renderItemCount = () => {
		let count = 0;

		if (cart === undefined) {
			return count;
		}

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
				{(() => {
					if (cart.items.length > 0) {
						return (
							<View style={ThemeStyles.box1}>
								<ButtonAction
									style={{
										width: window.width * 0.9,
										paddingVertical: 10,
										marginBottom: 10,
									}}
									title={
										"Proceed to checkout (" + renderItemCount() + " items)"
									}
									onPress={() =>
										console.log("ACTION: startCheckoutAction(cart)")
									}
								/>
							</View>
						);
					}
				})()}

				<View style={ThemeStyles.box2end}>{renderItems()}</View>

				{(() => {
					if (cart.items.length === 0) {
						return (
							<View style={ThemeStyles.box1}>
								<ButtonAction
									style={{
										width: window.width * 0.9,
										paddingVertical: window.height * 0.25,
										marginBottom: 10,
									}}
									title={"Continue shopping >>"}
									onPress={() => {
										console.log("ACTION: navigate to home");
										props.navigation.navigate("Home");
									}}
								/>
							</View>
						);
					}
				})()}
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
