import React from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	Button,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";

import { useSelector } from "react-redux";

import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import { ThemeStyles, Theme } from "../styles/Theme";
import Card from "../components/Card";
import ButtonActionSmall from "../components/themed/ButtonActionSmall";

const ShopScreen = (props) => {
	const products = useSelector((state) => {
		return state.products;
	});

	const window = useWindowDimensions();

	const styles = StyleSheet.create({
		listImage: {
			height: window.width * 0.6,
			width: window.width * 0.6,
			marginTop: 15,
		},
		productFooterContainer: {
			width: window.width * 0.7,
		},
		productFooter: {
			flexDirection: "row",
			flex: 1,
			justifyContent: "space-between",
			alignItems: "flex-end",
			marginTop: 10,
		},
	});

	const showProductScreen = (item) => {
		props.navigation.navigate("Product", {
			productId: item.id,
			title: item.title,
		});
	};
	const renderProduct = ({ index, item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					showProductScreen(item);
				}}
			>
				<Card
					key={String(index)}
					style={{
						paddingVertical: 5,
						margin: 20,
						borderWidth: 1,
						borderRadius: 3,
						borderColor: Theme.cancelColor,
						backgroundColor: "white",
					}}
				>
					<Image
						style={styles.listImage}
						source={{
							uri: item.image,
						}}
					/>
					<View style={styles.productFooterContainer}>
						<View style={styles.productFooter}>
							<View style={{ flex: 1 }}>
								<Text style={ThemeStyles.text}>
									{item.title}&nbsp;
									<Text style={ThemeStyles.textBold}>${item.price}</Text>
								</Text>
							</View>
							<ButtonActionSmall
								style={{ paddingVertical: 4 }}
								title="View"
								onPress={() => {
									showProductScreen(item);
								}}
							/>
						</View>
					</View>
				</Card>
			</TouchableOpacity>
		);
	};
	const renderFlatList = () => {
		return (
			<FlatList
				data={products}
				keyExtractor={(item) => String(item.id)}
				renderItem={renderProduct}
			/>
		);
	};

	return (
		<View style={ThemeStyles.screen}>
			<View style={ThemeStyles.box1}>{renderFlatList()}</View>
		</View>
	);
};

ShopScreen.navigationOptions = ({ navigation }) => {
	return {
		title: "Browse Shop",
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

export default ShopScreen;
