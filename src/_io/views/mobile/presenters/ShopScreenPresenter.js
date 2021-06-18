import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ShopScreen from "../screens/ShopScreen";
import { getProductsAction } from "../../../../_adapters/controllers";

const ShopScreenPresenter = ({ navigation }) => {
	const dispatch = useDispatch();

	// Get data:
	let products = useSelector((state) => state.products);
	const cartTotal = useSelector((state) => state.cart.total);

	// "Pre"-pare data for rendering:
	productsArray = Object.values(products);
	// Prefix price with currency
	productsArray.forEach((p) => {
		p.price = "$" + p.price;
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
