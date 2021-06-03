class Product {
	constructor(id, title, price, description, category, image) {
		console.log("id: ", id);
		this.id = id;
		if (!id) {
			this.id = "sku_" + Math.random();
		}
		this.title = title;
		this.price = price;
		this.description = description;
		this.category = category;
		this.image = image;

		console.log("New class Product: ", this);
	}
}

export default Product;
