class Product {
	constructor(title, price, description, category, image) {
		this.id = "sku_" + Math.random();
		this.title = title;
		this.price = price;
		this.description = description;
		this.category = category;
		this.image = image;
	}
}

export default Product;
