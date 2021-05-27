import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { Theme, ThemeStyles } from "../styles/Theme";
import Product from "../components/Product";
import MenuButton from "../navigation/MenuButton";

const UserProductsScreen = (props) => {
	console.log("TODO: filter this to show a subset...");
	const myProducts = useSelector((state) => Object.values(state.products));

	const handleEditProduct = (product) => {
		props.navigation.navigate("EditProduct", {
			productId: product.id,
			title: product.title,
		});
	};

	const renderProduct = ({ item }) => {
		return <Product item={item} allowEdit onClickEdit={handleEditProduct} />;
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
	};
};
export default UserProductsScreen;
