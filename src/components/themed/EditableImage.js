import React, { useState, useEffect, useRef } from "react";
import {
	View,
	TextInput,
	Image,
	TouchableOpacity,
	Keyboard,
} from "react-native";

import { ThemeStyles, Theme } from "../../styles/Theme";

const EditableImage = (props) => {
	const { initialValue, editMode, onChangeValue } = props;
	const [value, setValue] = useState(String(initialValue));
	const [showImage, setShowImage] = useState(true);

	console.log("Render EditableImage: ", value);

	useEffect(() => {
		console.log("showImage CHANGED, expect rerender... ", showImage);
	}, [showImage]);

	if (!editMode) {
		console.log("Not editmode returning normal image...");
		return (
			<Image
				{...props}
				style={props.style}
				source={{
					uri: value,
				}}
			/>
		);
	}

	if (showImage) {
		return (
			<TouchableOpacity
				onPress={() => {
					setShowImage(false);
				}}
			>
				<Image
					{...props}
					style={props.style}
					source={{
						uri: value,
					}}
				/>
			</TouchableOpacity>
		);
	}

	return (
		<View
			style={{
				...props.style,
				justifyContent: "center",
				padding: 10,
				borderColor: "black",
				borderWidth: 1,
				margin: 2,
			}}
		>
			<TextInput
				{...props}
				style={{
					...ThemeStyles.textMedium,
					...ThemeStyles.inputTextActive,
					marginTop: 100,
				}}
				value={value}
				onChangeText={(val) => {
					setValue(val);
					onChangeValue(val);
				}}
				onEndEditing={() => {
					Keyboard.dismiss();
				}}
				onBlur={() => setShowImage(true)}
			/>
		</View>
	);
};

export default EditableImage;
