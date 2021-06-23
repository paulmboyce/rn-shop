class Price {
	constructor(value = 0, currency = "") {
		this.price = value;
		this.currency = currency;
	}

	get currency() {
		return this.currency;
	}

	get price() {
		return this.roundTwoDecimalPlaces(this.price);
	}

	static roundTwoDecimalPlaces(val) {
		return Math.round((val + Number.EPSILON) * 100) / 100;
	}
}

export { Price };
