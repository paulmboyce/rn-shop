import { SHOW_ERROR, hideErrorAction } from "../actions/UiActions";

const delay5000 = (fn) => {
	setTimeout(fn, 5000);
};
export const UiMiddleware = ({ dispatch }) => {
	return (next) => {
		return (action) => {
			switch (action.type) {
				case SHOW_ERROR:
					console.log("[UiMiddleware] modifying action...");
					delay5000(() => dispatch(hideErrorAction()));
					action.payload.message = "[UiMiddleware]: " + action.payload.message;
					break;
				default:
			}

			return next(action);
		};
	};
};
