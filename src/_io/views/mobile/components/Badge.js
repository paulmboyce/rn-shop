import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { Theme } from "../styles/Theme";

const Badge = (props) => {
	const numItems = useSelector((state) => state.cart.numItems);

	return (
		<View>
			{numItems > 0 && (
				<View
					style={{
						position: "absolute",
						height: 18,
						width: 18,
						borderRadius: 12,
						backgroundColor: Theme.actionColor80Transparent,
						left: 12,
						bottom: 12,
						alignItems: "center",
						justifyContent: "center",
						zIndex: 2000,
					}}
				>
					<Text
						style={{
							fontSize: 10,
							color: "black",
							fontWeight: "bold",
						}}
					>
						{numItems}
					</Text>
				</View>
			)}
			<Ionicons
				name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
				size={23}
				color={props.tintColor}
			/>
		</View>
	);
};
export default Badge;
