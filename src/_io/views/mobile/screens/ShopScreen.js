import React, { useEffect } from "react";
import {
	View,
	FlatList,
	TouchableOpacity,
	RefreshControl,
	Button,
} from "react-native";

import MenuButton from "../navigation/MenuButton";
import CartButton from "../navigation/CartButton";
import { ThemeStyles, Theme } from "../styles/Theme";
import ButtonActionSmall from "../components/themed/ButtonActionSmall";
import Product from "../components/Product";
import PendingActivityIndicator from "../components/themed/PendingActivityIndicator";
import ErrorMessageContainer from "../components/themed/ErrorMessageContainer";

const ShopScreen = ({
	navigation,
	products,
	cartTotal,
	dispatchGetProductsAction,
}) => {
	useEffect(() => {
		console.log("Getting Products...");
		dispatchGetProductsAction();
	}, []);

	useEffect(() => {
		// This listener to refresh a screen managed by Navigation Drawer,
		// BECAUSE drawer screens are cached and so do not rerender on navigation.
		const focusListener = navigation.addListener("willFocus", () => {
			console.log("Refreshing Products...");
			dispatchGetProductsAction();
		});

		return focusListener.remove;
	}, []);

	useEffect(() => {
		navigation.setParams({ cartTotal: cartTotal });
	}, [cartTotal]);

	const showProductScreen = (item) => {
		navigation.navigate("Product", {
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
		dispatchGetProductsAction();
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
