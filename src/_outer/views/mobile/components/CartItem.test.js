import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

// Overrides @testing-library/react-native render
//import { renderWithRedux as render } from "../../../../utils/test/ReduxWrapper";

// testee:
import CartItem from "./CartItem";

const cartProduct = {
	id: "ABC123",
	title: "product ABC123 name",
	price: 123.99,
	description: "",
	category: "",
	image: "",
};

const cartItem = {
	productId: "ABC123",
	quantity: 179,
};

describe("Test button events", () => {
	let rntl;

	const mockIncrementBehaviour = jest.fn();
	const mockDecrementBehaviour = jest.fn();
	const mockDeleteBehaviour = jest.fn();

	beforeEach(() => {
		//ARR
		const mockBehaviours = {
			increment: mockIncrementBehaviour,
			decrement: mockDecrementBehaviour,
			delete: mockDeleteBehaviour,
		};

		rntl = render(
			<CartItem
				behaviours={mockBehaviours}
				cartProduct={cartProduct}
				cartItem={cartItem}
			/>
		);
	});

	it("click delete button fires delete behaviour with product.id", () => {
		//ACT
		const button = rntl.getByText(/^DELETE$/i);
		fireEvent.press(button);
		//ASS
		expect(mockDeleteBehaviour).toBeCalledWith("ABC123");
		expect(mockDeleteBehaviour).toHaveBeenCalledTimes(1);
	});

	it("click increment button fires increment behaviour with product.id", () => {
		//ACT
		const button = rntl.getByTestId("incrementButton");
		fireEvent.press(button);
		//ASS
		expect(mockIncrementBehaviour).toBeCalledWith("ABC123");
		expect(mockIncrementBehaviour).toHaveBeenCalledTimes(1);
	});

	it("click decrement button fires decrement behaviour with product.id", () => {
		//ACT
		const button = rntl.getByTestId("decrementButton");
		fireEvent.press(button);
		//ASS
		expect(mockDecrementBehaviour).toBeCalledWith("ABC123");
		expect(mockDecrementBehaviour).toHaveBeenCalledTimes(1);
	});
});

describe("Test product display", () => {
	let rntl;

	beforeEach(() => {
		//ARR
		rntl = render(
			<CartItem behaviours={{}} cartProduct={cartProduct} cartItem={cartItem} />
		);
	});

	it("displays product name", () => {
		//ACT
		const el = rntl.getByText(/^product ABC123 name$/i);
		//rntl.debug();

		//ASS
		expect(el).toBeTruthy();
	});

	it("displays product price", () => {
		//ACT
		const el = rntl.getByText(/123\.99/);
		//ASS
		expect(el).toBeTruthy();
	});

	it("price is prefixed with '$' currency", () => {
		//ACT
		const el = rntl.getByText(/^\$123\.99$/);
		//ASS
		expect(el).toBeTruthy();
	});

	it("displays quantity", () => {
		//ACT
		const el = rntl.getByText(/QUANTITY 179/i);
		//ASS
		expect(el).toBeTruthy();
	});
});
