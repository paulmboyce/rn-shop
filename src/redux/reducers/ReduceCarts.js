const defaultCart = [
	{
		id: 1,
		userId: 1,
		date: "2020-03-02T00:00:02.000Z",
		items: [
			{
				productId: 1,
				quantity: 2,
			},
			{
				productId: 2,
				quantity: 3,
			},
		],
	},
	{
		id: 2,
		userId: 2,
		date: "2020-03-05T00:00:02.000Z",
		items: [
			{
				productId: 5,
				quantity: 1,
			},
			{
				productId: 7,
				quantity: 2,
			},
			{
				productId: 9,
				quantity: 0,
			},
		],
	},
];

const reduceCarts = (state = defaultCart) => {
	return state;
};

export default reduceCarts;
