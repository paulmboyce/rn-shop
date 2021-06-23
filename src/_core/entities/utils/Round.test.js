import * as Round from "./Round";

it("rounds values to TWP dps", () => {
	//ARR
	const val = 1.005;
	//ACT
	const result = Round.roundTwoDecimalPlaces(val);
	//ASS
	expect(result).toBe(1.01);
});
