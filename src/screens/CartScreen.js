import React, { useState, useEffect } from "react";
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
	createOrderAction,
} from "../redux/actions/CartActions";

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
	const [quantityChanged, setQuantityChanged] = useState(false);
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
											setQuantityChanged((current) => !current);
										}}
									>
										<MaterialIcons name="remove" size={16} color="black" />
									</ButtonIconSmall>
									<ButtonIconSmall
										onPress={() => {
											dispatch(incrementCartAction(cartItem.productId));
											setQuantityChanged((current) => !current);
										}}
									>
										<MaterialIcons name="add" size={16} color="black" />
									</ButtonIconSmall>
									<View style={{ marginLeft: 10 }}>
										<ButtonActionSmall
											onPress={() => {
												dispatch(deleteFromCartAction(cartItem.productId));
												setQuantityChanged((current) => !current);
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

	const renderItemCount = () => {
		let count = 0;

		if (cart === undefined) {
			return count;
		}

		Object.values(cartItemsArray).map((item) => {
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
							Subtotal: ${Number.parseFloat(cart.total).toFixed(2)}
						</Text>
					</View>
				</View>
				{(() => {
					if (Object.values(cartItemsArray).length > 0) {
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
									onPress={() => {
										console.log("ACTION: startCheckoutAction(cart)");
										dispatch(createOrderAction(cart));
									}}
								/>
							</View>
						);
					}
				})()}

				<View style={ThemeStyles.box2end}>{renderItems()}</View>

				{(() => {
					if (Object.values(cartItemsArray).length === 0) {
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
