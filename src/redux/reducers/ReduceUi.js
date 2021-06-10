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
			return { ...oldState, pending: true };

		case HIDE_SPINNER:
			return { ...oldState, pending: false };

		case SHOW_ERROR:
			return { ...oldState, error: action.payload.message };

		case HIDE_ERROR:
			return { ...oldState, error: null };

		default:
			return oldState;
	}
};

export default reduceUi;
