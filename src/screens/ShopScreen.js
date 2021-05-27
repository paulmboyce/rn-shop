import React, { useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";

import { useSelector } from "react-redux";

import MenuButton from "../navigation/MenuButton";
import CartButton from "../navigation/CartButton";
import { ThemeStyles, Theme } from "../styles/Theme";

import Product from "../components/Product";

const ShopScreen = (props) => {
	const products = useSelector((state) => Object.values(state.products));
	const cartTotal = useSelector((state) => state.cart.total);

	const window = useWindowDimensions();

	useEffect(() => {
		props.navigation.setParams({ cartTotal: cartTotal });
	}, [cartTotal]);

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
				<Product
					key={index}
					item={item}
					allowView
					onClickView={showProductScreen}
				/>
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
		headerLeft: () => <MenuButton navigation={navigation} />,
		headerRight: () => <CartButton navigation={navigation} />,
	};
};

export default ShopScreen;
