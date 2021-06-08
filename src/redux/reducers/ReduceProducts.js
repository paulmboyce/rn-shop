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

const applyKeysAsIds = (products) => {
	Object.keys(products).forEach((key) => {
		products[key].id = key;
	});
	return products;
};

const reduceProducts = (oldState = products, { type, payload }) => {
	switch (type) {
		case GET_ALL_PRODUCTS: {
			if (payload.products) {
				console.log("GOT PRODUCTS: ", payload.products);
				const productsWithIds = applyKeysAsIds(payload.products);
				return { ...oldState, ...productsWithIds };
			}
		}

		case CREATE_PRODUCT: {
			console.log("payload: ", payload);
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
