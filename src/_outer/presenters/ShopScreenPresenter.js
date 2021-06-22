import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductsAction } from "../../_middle/controllers";

/**
 * NOTE: ShopScreenPresenter is a React component, and uses
 * useSelector() hook so is wired to our redux State.
 * This gives standard React refresh on state changes.
 *
 * Because it is a React Component it lives in _outer.
 *
 * Our Presenter additionally passes in the Controller(Actions).
 * This could be separaed, but here seems a fair location,
 * allowing our actual ScreenComponents to receive all data and
 * Controller/actions as params and hence be easy to isolate for Testing.
 *
 * BUT.. note that ShopScreenPresenter is NOT dependent on
 * the _outer/views/mobile/ShopScreen component and any
 * component uing ame props could be passed in.
 * For example, it could equally be provided a React/web/component.
 *
 * This keeps code dependencies directed inward,
 * aligned for Clean Architecture.
 */
const ShopScreenPresenter = ({ navigation, screenComponent: ShopScreen }) => {
	const dispatch = useDispatch();

	// Get data:
	let products = useSelector((state) => state.products);
	const cartTotal = useSelector((state) => state.cart.total);

	// "Pre"-pare data for rendering:
	productsArray = Object.values(products);
	// Prefix price with currency
	productsArray.forEach((p) => {
		p.priceInCurrency = "$" + p.price;
	});

	return (
		<ShopScreen
			navigation={navigation}
			products={productsArray}
			cartTotal={cartTotal}
			dispatchGetProductsAction={() => dispatch(getProductsAction())}
		/>
	);
};

export default ShopScreenPresenter;
