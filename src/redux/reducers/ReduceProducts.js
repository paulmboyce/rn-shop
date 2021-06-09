import PRODUCT_DATA from "../../data/products";
import {
	CREATE_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	GET_ALL_PRODUCTS,
} from "../actions/ProductActions";
import Product from "../../models/Product";

const products = {};
PRODUCT_DATA.forEach((product) => {
	products[product.id] = product;
});

const copyKeysToIdField = (products) => {
	Object.keys(products).forEach((key) => {
		products[key].id = key;
	});
	return products;
};

const reduceProducts = (oldState = {}, { type, payload }) => {
	switch (type) {
		case GET_ALL_PRODUCTS: {
			if (payload.products) {
				console.log(`Got [${Object.keys(payload.products).length}] products`);
				const productsWithIds = copyKeysToIdField(payload.products);
				return { ...productsWithIds };
			}
		}

		case CREATE_PRODUCT: {
			return { ...oldState, [payload.id]: payload.product };
		}

		case UPDATE_PRODUCT: {
			const updatedProduct = payload.product;
			const newState = { ...oldState, [updatedProduct.id]: updatedProduct };
			return newState;
		}

		case DELETE_PRODUCT: {
			const newState = { ...oldState };
			delete newState[payload.productId];
			return newState;
		}

		default:
			return oldState;
	}
};

export default reduceProducts;
