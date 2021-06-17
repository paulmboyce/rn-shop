import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ShopScreen from "../screens/ShopScreen";
import { getProductsAction } from "../../../../_adapters/controllers";

const ShopScreenPresenter = ({ navigation }) => {
	// Get all the data, and prepare it for rendering
	const products = useSelector((state) => Object.values(state.products));
	const cartTotal = useSelector((state) => state.cart.total);

	const dispatch = useDispatch();

	return (
		<ShopScreen
			navigation={navigation}
			products={products}
			cartTotal={cartTotal}
			dispatchGetProductsAction={() => dispatch(getProductsAction())}
		/>
	);
};

export default ShopScreenPresenter;
