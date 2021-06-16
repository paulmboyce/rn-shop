import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	useWindowDimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ButtonActionSmall from "./themed/ButtonActionSmall";
import ButtonIconSmall from "./themed/ButtonIconSmall";
import Card from "./Card";
import { ThemeStyles, Theme } from "../styles/Theme";

const CartItem = ({ cartProduct, cartItem, behaviours }) => {
	const window = useWindowDimensions();

	const styles = StyleSheet.create({
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
					<View style={{ flexDirection: "row", marginBottom: 20 }}>
						<Text style={ThemeStyles.text}>Item price:&nbsp;</Text>
						<Text style={ThemeStyles.textBold}>${cartProduct.price}</Text>
					</View>

					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-start",
							alignItems: "center",
						}}
					>
						<View
							style={{
								width: "40%",
								flexDirection: "row",
								justifyContent: "align-left",
								alignItems: "center",
								marginRight: 5,
							}}
						>
							<Text style={ThemeStyles.text}>
								Quantity
								<Text style={ThemeStyles.textBold}> {cartItem.quantity}</Text>
							</Text>
						</View>
						<View
							style={{
								width: "40%",
								flexDirection: "row",
								justifyContent: "align-right",
								alignItems: "center",
								marginRight: 20,
							}}
						>
							<ButtonIconSmall
								testID="decrementButton"
								onPress={() => {
									behaviours.decrement(cartItem.productId);
								}}
							>
								<MaterialIcons name="remove" size={16} color="black" />
							</ButtonIconSmall>
							<ButtonIconSmall
								testID="incrementButton"
								onPress={() => {
									behaviours.increment(cartItem.productId);
								}}
							>
								<MaterialIcons name="add" size={16} color="black" />
							</ButtonIconSmall>
							<View style={{ marginLeft: 10 }}>
								<ButtonActionSmall
									onPress={() => {
										behaviours.delete(cartItem.productId);
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
			</View>
		</Card>
	);
};

export default CartItem;
