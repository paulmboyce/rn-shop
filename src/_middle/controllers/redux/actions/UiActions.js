import {
	SHOW_ERROR,
	HIDE_ERROR,
	SHOW_SPINNER,
	HIDE_SPINNER,
} from "../actions/ActionTypes";

export const showSpinnerAction = () => {
	return { type: SHOW_SPINNER };
};

export const hideSpinnerAction = () => {
	return { type: HIDE_SPINNER };
};

export const showErrorAction = (message) => {
	return (dispatch) => {
		dispatch({ type: SHOW_ERROR, payload: { message } });
	};
};

export const hideErrorAction = () => {
	return { type: HIDE_ERROR };
};
