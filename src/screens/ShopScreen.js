import React from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	Button,
	FlatList,
	Image,
} from "react-native";

import { useSelector } from "react-redux";

import MaterialHeaderButtons from "../navigation/HeaderButtons";
import { Item } from "react-navigation-header-buttons";
import { ThemeStyles, Theme } from "../styles/Theme";
import Card from "../components/Card";

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

	const renderProduct = ({ index, item }) => {
		console.log("Render ITEM: ", index, item.image);
		return (
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
							<Text>
								{item.title}&nbsp;
								<Text style={{ fontWeight: "bold" }}>${item.price}</Text>
							</Text>
						</View>
						<Button
							title="VIEW"
							onPress={() => {
								console.log(`ACTION: addToCartAction(${item.id})`);
							}}
						/>
					</View>
				</View>
			</Card>
		);
	};
	const renderFlatList = () => {
		return <FlatList data={products} renderItem={renderProduct} />;
	};

	return (
		<View style={ThemeStyles.screen}>
			<View style={ThemeStyles.box1}>{renderFlatList()}</View>

			<Button
				title="Product"
				onPress={() => {
					props.navigation.navigate("Product");
				}}
			/>
			<Button
				title="Orders"
				onPress={() => {
					props.navigation.navigate("Orders");
				}}
			/>
			<Button
				title="Cart"
				onPress={() => {
					props.navigation.navigate("Cart");
				}}
			/>
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
