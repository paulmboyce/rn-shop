import React, { useState, useEffect } from "react";
import {
	Text,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	View,
} from "react-native";

import { ThemeStyles, Theme } from "../../styles/Theme";

const inputActiveStyle = {
	...ThemeStyles.textMedium,
	...ThemeStyles.inputTextActive,
};

const EditableText = ({
	initialValue,
	editMode,
	onChangeValue,
	style,
	keyboardType,
	multiline,
	isValid,
	errorMessage,
}) => {
	const [inputStyle, setInputStyle] = useState(style);
	const [value, setValue] = useState(String(initialValue));

	const showValidationErrors = () => {
		if (!isValid) {
			return <Text style={{ color: "red" }}>{errorMessage}</Text>;
		}
	};

	if (editMode) {
		return (
			<View>
				<TextInput
					value={value}
					onChangeText={(val) => {
						setValue(val);
					}}
					style={inputStyle}
					keyboardType={keyboardType ? keyboardType : "default"}
					multiline={multiline}
					onEndEditing={() => {
						console.log("About to dsmiss keyboard...");
						Keyboard.dismiss();
						onChangeValue(value);
					}}
					onFocus={() => setInputStyle(inputActiveStyle)}
					onBlur={() => setInputStyle(style)}
				></TextInput>
				{showValidationErrors()}
			</View>
		);
	}

	return <Text style={style}>{value}</Text>;
};

export default EditableText;
