import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	useWindowDimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import ButtonActionSmall from "../components/themed/ButtonActionSmall";
import ButtonIconSmall from "../components/themed/ButtonIconSmall";
import Card from "./Card";
import { ThemeStyles, Theme } from "../styles/Theme";
import {
	deleteFromCartAction,
	decrementCartAction,
	incrementCartAction,
} from "../redux/actions/CartActions";

const CartItem = ({ cartProduct, cartItem }) => {
	const window = useWindowDimensions();
	const dispatch = useDispatch();

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
	);
};

export default CartItem;
