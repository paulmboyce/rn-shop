const reduceFormAction = (field, value) => {
	return { type: "UPDATE_FORM", payload: { field, value } };
};

const reduceValues = (state, field, value) => {
	const newValues = { ...state.values, [field]: value };
	const newState = { ...state, values: newValues };
	console.log("STATE: ", newState);
	return newState;
};

const formReducer = (oldState, action) => {
	if (action.type === "UPDATE_FORM") {
		const payload = action.payload;

		switch (action.payload.field) {
			case "title": {
				const newState = reduceValues(oldState, payload.field, payload.value);
				newState.checks = {
					...oldState.checks,
					[payload.field]: validateTitle(payload.value),
				};
				return newState;
			}
			case "description": {
				const newState = reduceValues(oldState, payload.field, payload.value);
				newState.checks = {
					...oldState.checks,
					[payload.field]: validateDescription(payload.value),
				};
				return newState;
			}
			case "price": {
				const newState = reduceValues(oldState, payload.field, payload.value);
				newState.checks = {
					...oldState.checks,
					[payload.field]: validatePrice(payload.value),
				};
				return newState;
			}
			default:
				return oldState;
		}
	}

	return oldState;
};

const validateTitle = (title) => {
	let checks = { valid: true, err: null };
	if (title.length < 1) {
		checks = { valid: false, err: "Please enter a title" };
	}
	if (title.length > 10) {
		checks = { valid: false, err: "Max title length is 10 characters" };
	}
	return checks;
};

const validatePrice = (price) => {
	let checks = { valid: true, err: null };
	if (price.length < 1) {
		checks = { valid: false, err: "Please enter a price" };
	}
	if (price <= 0) {
		checks = { valid: false, err: "Price cannot be zero" };
	}
	return checks;
};

const validateDescription = (description) => {
	let checks = { valid: true, err: null };
	if (description.length < 1) {
		checks = { valid: false, err: "Please enter a description" };
	}
	if (description.length > 100) {
		checks = {
			valid: false,
			err: "Max description length is 100 characters",
		};
	}
	return checks;
};

export { formReducer, reduceFormAction };
