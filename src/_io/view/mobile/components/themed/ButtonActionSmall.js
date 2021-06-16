import React from "react";
import ButtonAction from "./ButtonAction";

const ButtonActionSmall = (props) => {
	return (
		<ButtonAction
			textStyle={{ fontSize: 14, paddingVertical: 3, marginHorizontal: 2 }}
			{...props}
		/>
	);
};

export default ButtonActionSmall;
