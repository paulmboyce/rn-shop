import { SHOW_SPINNER, HIDE_SPINNER } from "../actions/UiActions";

const initState = {
	pending: false,
};

const reduceUi = (oldState = initState, action) => {
	switch (action.type) {
		case SHOW_SPINNER:
			console.log("Show spinner...");
			return { ...oldState, pending: true };

		case HIDE_SPINNER:
			console.log("Hide spinner...");
			return { ...oldState, pending: false };

		default:
			return oldState;
	}
};

export default reduceUi;
