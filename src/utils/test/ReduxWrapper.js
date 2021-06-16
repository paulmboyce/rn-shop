import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";
import { buildStore } from "./Store";

function renderWithRedux(component, { state } = {}) {
	const store = buildStore(state);
	const queries = render(<Provider store={store}>{component}</Provider>);

	return {
		...queries,
		store,
	};
}

export { renderWithRedux };
