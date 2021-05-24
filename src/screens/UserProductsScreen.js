import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { Theme, ThemeStyles } from "../styles/Theme";
import Product from "../components/Product";
import MenuButton from "../navigation/MenuButton";

const UserProductsScreen = (props) => {
	console.log("TODO: filter this to show a subset...");
	const myProducts = useSelector((state) => state.products);

	const handleEditProduct = (item) => {
		props.navigation.navigate("EditProduct", {
			productId: item.id,
			title: item.title,
		});
	};

	return (
		<View style={{ ...ThemeStyles.screen, backgroundColor: Theme.cancelColor }}>
			<FlatList
				data={myProducts}
				renderItem={({ index, item }) => (
					<Product
						key={String.valueOf(index)}
						item={item}
						allowEdit
						onEdit={handleEditProduct}
					/>
				)}
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
