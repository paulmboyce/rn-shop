import { roundTwoDecimalPlaces } from "./utils/Round";

class Price {
	constructor(value = 0, currency = "") {
		this.price = value;
		this.currency = currency;
	}

	get getCurrency() {
		return this.currency;
	}

	get getPrice() {
		return roundTwoDecimalPlaces(this.price);
	}
}

export { Price };
