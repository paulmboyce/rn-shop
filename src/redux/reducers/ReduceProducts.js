import PRODUCT_DATA from "../../data/products";

console.log("PRODUCT_DATA: ", PRODUCT_DATA);
const reduceProducts = (oldState = PRODUCT_DATA) => {
	console.log(`Reducing ${PRODUCT_DATA.length} products...`);

	return oldState;
};

export default reduceProducts;
