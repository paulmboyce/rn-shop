import {
	SHOW_SPINNER,
	HIDE_SPINNER,
	SHOW_ERROR,
	HIDE_ERROR,
} from "../actions/UiActions";

const initState = {
	pending: false,
	error: null,
};

const reduceUi = (oldState = initState, action) => {
	switch (action.type) {
		case SHOW_SPINNER:
			console.log("Show spinner...");
			return { ...oldState, pending: true };

		case HIDE_SPINNER:
			console.log("Hide spinner...");
			return { ...oldState, pending: false };

		case SHOW_ERROR:
			console.log("Show error...");
			return { ...oldState, error: action.payload.message };

		case HIDE_ERROR:
			console.log("Hide error...");
			return { ...oldState, error: null };

		default:
			return oldState;
	}
};

export default reduceUi;
