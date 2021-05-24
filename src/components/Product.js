import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	useWindowDimensions,
} from "react-native";

import Card from "../components/Card";
import ButtonActionSmall from "../components/themed/ButtonActionSmall";
import { ThemeStyles, Theme } from "../styles/Theme";

const Product = ({ item, allowView, onClickView, allowEdit, onEdit }) => {
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

	return (
		<Card
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
					{allowView && (
						<ButtonActionSmall
							style={{ paddingVertical: 4 }}
							title="View"
							onPress={() => {
								onClickView(item);
							}}
						/>
					)}
					{allowEdit && (
						<ButtonActionSmall
							style={{ paddingVertical: 4 }}
							title="Edit"
							onPress={() => {
								onEdit(item);
							}}
						/>
					)}
				</View>
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({});

export default Product;
