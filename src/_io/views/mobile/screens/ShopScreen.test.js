import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { renderWithRedux } from "../../../../utils/test/ReduxWrapper";
import ShopScreen from "./ShopScreen";

const navigationStub = {
	addListener: (...args) => {
		return { remove: () => {} };
	},
	setParams: () => {},
};

describe("Test rendering content/elements", () => {
	it("shows a refesh button when no products avavilable", () => {
		//ARR
		const productsArray = [];

		//ACT: Redux wrapper is needed because nested components expect it.
		const rntl = renderWithRedux(
			<ShopScreen
				navigation={navigationStub}
				products={productsArray}
				cartTotal={{}}
				dispatchGetProductsAction={() => {}}
			/>,
			{ initialState: undefined }
		);
		//		console.log("STATE: ", rntl.store.getState());

		//ASS (Implicit assertions because getByText anf fireEvent will thro error on failure)
		const button = rntl.getByText(/REFRESH/i);
		fireEvent.press(button);
	});

	it("Displays list of products", () => {
		//ARR
		const productsArray = [
			{
				id: 1,
				title: "Product 1 Title",
				price: 69.79,
				priceInCurrency: "$" + 69.79,
				image: "{NOT TESTED}",
			},
			{
				id: 2,
				title: "Product 2 Title",
				price: 1234567.89,
				priceInCurrency: "$" + 1234567.89,
				image: "{NOT TESTED}",
			},
		];

		//ACT: Redux wrapper is needed because nested components expect it.
		const rntl = renderWithRedux(
			<ShopScreen
				navigation={navigationStub}
				products={productsArray}
				cartTotal={{}}
				dispatchGetProductsAction={() => {}}
			/>,
			{ initialState: { products: { productsArray } } }
		);

		//console.log("STATE: ", rntl.store.getState());
		//		console.log(rntl.debug());

		//ASS (Implicit assertions because getByText throws error on fail
		rntl.getByText("Product 1 Title");
		rntl.getByText("Product 2 Title");
		rntl.getByText("$69.79");
		rntl.getByText("$1234567.89");
	});

	it("Displays loading state", () => {
		//ARR
		//ACT
		const rntl = renderWithRedux(
			<ShopScreen
				navigation={navigationStub}
				products={[]}
				cartTotal={null}
				dispatchGetProductsAction={() => {}}
			/>,
			{ initialState: { ui: { pending: true } } }
		);
		//ASS
		rntl.getByTestId("id.ActivityIndicator");
	});

	it("Displays errors", () => {
		//ARR
		//ACT
		const rntl = renderWithRedux(
			<ShopScreen
				navigation={navigationStub}
				products={[]}
				cartTotal={null}
				dispatchGetProductsAction={() => {}}
			/>,
			{ initialState: { ui: { error: "Test Displays loading state MESSAGE" } } }
		);
		//ASS
		rntl.getByText("Test Displays loading state MESSAGE");
	});
});

describe("Test Dispatch of Controller Actions (i.e. calls to Redux)", () => {
	it("Calls get products action on first render", () => {
		//ARR
		const mockDispatchAction = jest.fn();
		//ACT
		const rntl = renderWithRedux(
			<ShopScreen
				navigation={navigationStub}
				products={{}}
				cartTotal={{}}
				dispatchGetProductsAction={mockDispatchAction}
			/>,
			{ initialState: undefined }
		);
		//		console.log("STATE: ", rntl.store.getState());
		//ASS
		expect(mockDispatchAction).toBeCalledTimes(1);
	});
});
