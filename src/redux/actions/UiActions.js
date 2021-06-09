export const SHOW_SPINNER = "SHOW_SPINNER";
export const HIDE_SPINNER = "HIDE_SPINNER";

const showSpinnerAction = () => {
	return { type: SHOW_SPINNER };
};

const hideSpinnerAction = () => {
	return { type: HIDE_SPINNER };
};

export { showSpinnerAction, hideSpinnerAction };
