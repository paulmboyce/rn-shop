import PRODUCT_DATA from "../../data/products";
import { UPDATE_PRODUCT, DELETE_PRODUCT } from "../actions/ProductActions";

const products = {};
PRODUCT_DATA.forEach((product) => {
	products[product.id] = product;
});

const reduceProducts = (oldState = products, { type, payload }) => {
	switch (type) {
		case UPDATE_PRODUCT: {
			const updatedProduct = payload.product;
			console.log("update product with: ", updatedProduct);
			const newState = { ...oldState, [updatedProduct.id]: updatedProduct };
			return newState;
		}

		case DELETE_PRODUCT: {
			console.log("delete product with ID: ", payload.productId);
			const newState = { ...oldState };
			delete newState[payload.productId];
			return newState;
		}

		default:
			return oldState;
	}
};

export default reduceProducts;
