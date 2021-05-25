import React, { useState } from "react";
import {
	Text,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

import { ThemeStyles, Theme } from "../../styles/Theme";

const EditableText = ({
	initialValue,
	editMode,
	onChangeValue,
	style,
	keyboardType,
	multiline,
}) => {
	const [value, setValue] = useState(String(initialValue));

	if (editMode) {
		return (
			<TextInput
				value={value}
				onChangeText={(val) => {
					setValue(val);
					onChangeValue(val);
				}}
				style={style}
				keyboardType={keyboardType ? keyboardType : "default"}
				multiline={multiline}
			></TextInput>
		);
	}

	return <Text style={style}>{value}</Text>;
};

export default EditableText;
