import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Theme, ThemeStyles } from "../styles/Theme";
import Product from "../components/Product";
import MenuButton from "../navigation/MenuButton";
import AddProductButton from "../navigation/AddProductButton";
import ButtonIconSmall from "../components/themed/ButtonIconSmall";
import { Ionicons } from "@expo/vector-icons";
import * as productActions from "../redux/actions/ProductActions";

const UserProductsScreen = (props) => {
	console.log("TODO: filter this to show a subset...");
	const myProducts = useSelector((state) => Object.values(state.products));

	const dispatch = useDispatch();
	const handleEditProduct = (product) => {
		props.navigation.navigate("EditProduct", {
			productId: product.id,
			title: product.title,
		});
	};

	const renderProduct = ({ item }) => {
		return (
			<Product item={item}>
				<ButtonIconSmall
					style={styles.buttonIcon}
					onPress={() => {
						handleEditProduct(item);
					}}
				>
					<Ionicons name="create-outline" size={26} color="black" />
				</ButtonIconSmall>
				<ButtonIconSmall
					style={styles.buttonIcon}
					onPress={() => {
						dispatch(productActions.deleteProductAction(item.id));
					}}
				>
					<Ionicons name="trash-outline" size={26} color="black" />
				</ButtonIconSmall>
			</Product>
		);
	};
	return (
		<View style={ThemeStyles.screenEdit}>
			<FlatList
				data={myProducts}
				keyExtractor={(item) => String(item.id)}
				renderItem={renderProduct}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

UserProductsScreen.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam("title");
	return {
		title: title ? title : "My Shop Products",
		headerLeft: () => <MenuButton navigation={navigation} />,
		headerRight: () => <AddProductButton navigation={navigation} />,
	};
};
export default UserProductsScreen;
