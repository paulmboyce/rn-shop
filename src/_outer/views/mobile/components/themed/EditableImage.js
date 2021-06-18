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
	const imageInputRef = useRef();

	useEffect(() => {
		if (!showImage) {
			imageInputRef.current.focus();
		}
	}, [showImage, imageInputRef]);

	if (!editMode) {
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
				borderColor: Theme.blackColor,
				borderWidth: 1,
				margin: 2,
			}}
		>
			<TextInput
				ref={imageInputRef}
				{...props}
				style={{
					...ThemeStyles.textMedium,
					...ThemeStyles.inputTextActive,
					marginTop: 100,
				}}
				value={value}
				onChangeText={(val) => {
					setValue(val);
				}}
				onEndEditing={() => {
					console.log("About to dsmiss keyboard...");
					Keyboard.dismiss();
					onChangeValue(value);
				}}
				onBlur={() => setShowImage(true)}
			/>
		</View>
	);
};

export default EditableImage;
