export function roundTwoDecimalPlaces(val) {
	return Math.round((val + Number.EPSILON) * 100) / 100;
}
