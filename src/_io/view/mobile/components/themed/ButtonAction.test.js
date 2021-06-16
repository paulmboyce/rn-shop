import React from "react";
import { Text } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";

import ButtonAction from "./ButtonAction";

describe("Button display", () => {
	test("it renders the title", () => {
		//ARR
		const rntl = render(<ButtonAction title="SUBMIT" />);
		//ACT
		rntl.getByText(/^submit$/i);
		//ASS
		// Not needed, getByText throws err if not found
	});

	test("it renders the children", () => {
		//ARR
		const rntl = render(<ButtonAction>SUBMIT</ButtonAction>);
		//ACT
		rntl.getByText(/^submit$/i);
		//ASS
		// Not needed, getByText throws err if not found
	});

	test("it renders the children", () => {
		//ARR
		const rntl = render(
			<ButtonAction>
				<Text>SUBMIT</Text>
			</ButtonAction>
		);
		//ACT
		rntl.getByText(/^submit$/i);
		//ASS
		// Not needed, getByText throws err if not found
	});
});

describe("Button behaviour", () => {
	test("it fires the onPress for title", () => {
		//ARR
		const mockOnPress = jest.fn();
		const rntl = render(<ButtonAction title="SUBMIT" onPress={mockOnPress} />);
		//ACT
		const button = rntl.getByText(/submit/i);
		fireEvent.press(button);
		//ASS
		expect(mockOnPress).toBeCalledTimes(1);
	});

	test("it fires the onPress for embedded text (not nested)", () => {
		//ARR
		const mockOnPress = jest.fn();
		const rntl = render(<ButtonAction title="SUBMIT" onPress={mockOnPress} />);
		//ACT
		const button = rntl.getByText(/submit/i);
		fireEvent.press(button);
		//ASS
		expect(mockOnPress).toBeCalledTimes(1);
	});

	test("it fires the onPress event when nested child elements are clicked", () => {
		//ARR
		const mockOnPress = jest.fn();
		const rntl = render(
			<ButtonAction onPress={mockOnPress}>
				<Text>a nested child</Text>
			</ButtonAction>
		);
		//ACT
		const childElement = rntl.getByText(/A NESTED CHILD/i);
		fireEvent.press(childElement);
		//ASS
		expect(mockOnPress).toBeCalledTimes(1);
	});
});
