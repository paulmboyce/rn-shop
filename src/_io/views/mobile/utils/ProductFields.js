export const extractFields = (product) => {
	return {
		title: product.title,
		price: product.price,
		description: product.description,
		category: product.category,
		image: product.image,
	};
};
