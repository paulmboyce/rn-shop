import React, { useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	useWindowDimensions,
	FlatList,
	Image,
	TouchableOpacity,
	RefreshControl,
	Button,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import MenuButton from "../navigation/MenuButton";
import CartButton from "../navigation/CartButton";
import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonActionSmall from "../components/themed/ButtonActionSmall";
import { getProductsAction } from "../../../../redux/actions/ProductActions";
import Product from "../components/Product";
import PendingActivityIndicator from "../components/themed/PendingActivityIndicator";
import ErrorMessageContainer from "../components/themed/ErrorMessageContainer";

const ShopScreen = (props) => {
	const products = useSelector((state) => Object.values(state.products));
	const cartTotal = useSelector((state) => state.cart.total);

	const { navigation } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("Getting Products...");
		dispatch(getProductsAction());
	}, [dispatch]);

	useEffect(() => {
		// This listener to refresh a screen managed by Navigation Drawer,
		// BECAUSE drawer screens are cached and so do not rerender on navigation.
		const focusListener = navigation.addListener("willFocus", () => {
			console.log("Refreshing Products...");
			dispatch(getProductsAction());
		});

		return focusListener.remove;
	}, [dispatch]);

	useEffect(() => {
		navigation.setParams({ cartTotal: cartTotal });
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

	const renderRefreshButton = () => {
		if (products.length < 1) {
			return (
				<Button
					color={Theme.primaryColor}
					title="Refresh"
					onPress={onRefresh}
				/>
			);
		}
	};

	return (
		<View style={ThemeStyles.screen}>
			<ErrorMessageContainer />
			<PendingActivityIndicator />
			{renderRefreshButton()}
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
