import { roundTwoDecimalPlaces } from "../entities/utils/Round";

class CartInteractor {
	constructor() {
		console.log("[USE CASES]: New CartInteractor instantiated.");
	}
	calculateTotal = (items = [{ price: 0, quantity: 0 }]) => {
		let subTotal = 0;
		items.map((item) => {
			subTotal += item.price * item.quantity;
		});
		console.log("[USE CASES]: CartInteractor returning calculateTotal()...");
		return roundTwoDecimalPlaces(subTotal);
	};

	calcNumItems = (items = [{ quantity: 0 }]) => {
		let subTotal = 0;
		items.map((item) => {
			subTotal += item.quantity;
		});
		console.log("[USE CASES]: CartInteractor returning calcNumItems()...");
		return Math.round(subTotal);
	};
}

export { CartInteractor };
