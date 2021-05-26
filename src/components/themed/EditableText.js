import React, { useState, useEffect } from "react";
import {
	Text,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
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
}) => {
	const [value, setValue] = useState(String(initialValue));

	const [inputStyle, setInputStyle] = useState(style);

	useEffect(() => {
		console.log("inputStyle changed");
	}, [inputStyle]);

	if (editMode) {
		return (
			<TextInput
				value={value}
				onChangeText={(val) => {
					setValue(val);
					onChangeValue(val);
				}}
				style={inputStyle}
				keyboardType={keyboardType ? keyboardType : "default"}
				multiline={multiline}
				onEndEditing={Keyboard.dismiss}
				onFocus={() => setInputStyle(inputActiveStyle)}
				onBlur={() => setInputStyle(style)}
			></TextInput>
		);
	}

	return <Text style={style}>{value}</Text>;
};

export default EditableText;
