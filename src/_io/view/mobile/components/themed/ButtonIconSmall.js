import React from "react";

import { Theme } from "../../styles/Theme";
import ButtonActionSmall from "./ButtonActionSmall";

const ButtonIconSmall = (props) => {
	return (
		<ButtonActionSmall
			{...props}
			buttonStyle={{
				paddingHorizontal: 0,
				paddingVertical: 0,
				backgroundColor: Theme.cancelColor,
				marginHorizontal: 1,
			}}
		>
			{props.children}
		</ButtonActionSmall>
	);
};

export default ButtonIconSmall;
