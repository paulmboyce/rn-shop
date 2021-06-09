import React, { useEffect, useCallback } from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	FlatList,
	Image,
	TouchableOpacity,
	RefreshControl,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import MenuButton from "../navigation/MenuButton";
import CartButton from "../navigation/CartButton";
import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonActionSmall from "../components/themed/ButtonActionSmall";
import { getProductsAction } from "../redux/actions/ProductActions";
import Product from "../components/Product";
import PendingActivityIndicator from "../components/themed/PendingActivityIndicator";
import loadInitialProductsToStore from "../utils/InitialProductsStoreLoader";

const ShopScreen = (props) => {
	const products = useSelector((state) => Object.values(state.products));
	const cartTotal = useSelector((state) => state.cart.total);

	console.log("Render ShowScreen, STATE.products ==> ", products.length);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("Getting Products...");
		dispatch(getProductsAction());
	}, []);

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
				<Product key={index} item={item}>
					<ButtonActionSmall
						style={{ paddingVertical: 4 }}
						title="View"
						onPress={() => {
							showProductScreen(item);
						}}
					/>
				</Product>
			</TouchableOpacity>
		);
	};

	const renderFlatList = () => {
		return (
			<FlatList
				data={products}
				keyExtractor={(item) => String(item.id)}
				renderItem={renderProduct}
				refreshControl={
					<RefreshControl refreshing={false} onRefresh={onRefresh} />
				}
			/>
		);
	};

	const onRefresh = () => {
		dispatch(getProductsAction());
	};

	return (
		<View style={ThemeStyles.screen}>
			<PendingActivityIndicator />
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
