export const SHOW_SPINNER = "SHOW_SPINNER";
export const HIDE_SPINNER = "HIDE_SPINNER";

export const SHOW_ERROR = "SHOW_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";

export const showSpinnerAction = () => {
	return { type: SHOW_SPINNER };
};

export const hideSpinnerAction = () => {
	return { type: HIDE_SPINNER };
};

export const showErrorAction = (message) => {
	return (dispatch) => {
		dispatch({ type: SHOW_ERROR, payload: { message } });
		setTimeout(() => dispatch(hideErrorAction()));
	};
};

const hideErrorAction = () => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch({ type: HIDE_ERROR });
		}, 5000);
	};
};
