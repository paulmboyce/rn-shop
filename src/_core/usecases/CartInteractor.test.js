import { CartInteractor } from "./CartInteractor";
import { CartItem } from "../entities/CartItem";

describe("Test cart use cases", () => {
	it("Calculates the total number of Items in the Cart", () => {
		//ARR
		const testee = new CartInteractor();
		const item1 = new CartItem("", null, 1);
		const item2 = new CartItem("", null, 3);
		const item3 = new CartItem("", null, 5);
		const cartItems = [item1, item2, item3];
		//ACT
		const result = testee.calcNumItems(cartItems);
		//ASS
		expect(result).toBe(9);
	});

	it("Calculates the total value of all Items in the Cart", () => {
		//ARR
		const testee = new CartInteractor();
		const item1 = new CartItem("", 1.5, 1);
		const item2 = new CartItem("", 3.99, 3);
		const item3 = new CartItem("", 2, 5);
		const cartItems = [item1, item2, item3];
		//ACT
		const result = testee.calculateTotal(cartItems);
		//ASS
		expect(result).toBe(23.47);
	});
});
