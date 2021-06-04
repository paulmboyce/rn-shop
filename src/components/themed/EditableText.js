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
	doValidate,
}) => {
	const [inputStyle, setInputStyle] = useState(style);
	const [value, setValue] = useState(String(initialValue));
	const [isValid, setIsValid] = useState();
	const [advice, setAdvice] = useState("");

	/**
	useEffect(() => {
		console.log("inputStyle changed");
	}, [inputStyle]);

 */

	const showValidationErrors = () => {
		if (doValidate && typeof doValidate === "function" && !isValid) {
			return <Text style={{ color: "red" }}>{advice}</Text>;
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
						if (doValidate && typeof doValidate === "function") {
							const checks = doValidate(value);
							console.log("CHECKS: ", checks);
							setIsValid(checks.valid);
							setAdvice(checks.err);
						}
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
