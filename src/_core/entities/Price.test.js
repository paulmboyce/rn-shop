import { Price } from "./Price";

describe("Test attributes", () => {
	it("Provides access to Price", () => {
		//ARR
		const price = new Price(1.99, null);
		//ACT
		const result = price.getPrice;
		//ASS
		expect(result).toBe(1.99);
	});

	it("Provides access to Currency", () => {
		//ARR
		const price = new Price(null, "USD");
		//ACT
		const result = price.getCurrency;
		//ASS
		expect(result).toBe("USD");
	});

	it("Price always returned as 2 Decimal Places", () => {
		//ARR
		const price = new Price(1.005, null);
		//ACT
		const result = price.getPrice;
		//ASS
		expect(result).toBe(1.01);
	});
});
