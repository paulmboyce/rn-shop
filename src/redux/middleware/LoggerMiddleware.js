export const LoggerMiddleware = ({ getState }) => (next) => (action) => {
	console.log("Dispatched ACTION: =================>", action.type);

	// Pass the action thru the middleware chain.
	return next(action);
};
