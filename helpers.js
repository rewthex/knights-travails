const moves = [
	[2, 1],
	[-2, 1],
	[2, -1],
	[-2, -1],
	[1, 2],
	[-1, 2],
	[1, -2],
	[-1, -2],
];

export const printPath = (path) => {
	console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
	for (let pos of path) {
		console.log(pos);
	}
};

export const nextMoves = (pos) => {
	return moves
		.map((move) => [move[0] + pos[0], move[1] + pos[1]])
		.filter(
			(move) => move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7
		);
};
