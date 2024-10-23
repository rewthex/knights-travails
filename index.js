import { possibleMoves, equalCoordinates, printPath } from './helpers.js';

const knightMoves = (start, end) => {
	const paths = [[start]];
	while (true) {
		const currentPath = paths.shift();
		const lastPosition = currentPath[currentPath.length - 1];
		const nextPosition = possibleMoves(lastPosition);
		for (let pos of nextPosition) {
			const newPath = currentPath.slice();
			const newPathSet = new Set(...newPath);
			if (newPathSet.has(pos) === false) {
				newPathSet.add(pos);
				newPath.push(pos);
				paths.push(newPath);
			}
			if (equalCoordinates(newPath[newPath.length - 1], end)) {
				return printPath(newPath);
			}
		}
	}
};

knightMoves([0, 0], [7, 7]);
