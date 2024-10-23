import { nextMoves, printPath } from './helpers.js';

const knightMoves = (start, end) => {
	const [endX, endY] = end;
	const paths = [[start]];
	
	while (true) {
		const currentPath = paths.shift();
		const lastPosition = currentPath[currentPath.length - 1];
		const nextPosition = nextMoves(lastPosition);
		
		for (const next of nextPosition) {
			const [nextX, nextY] = next;
			const newPath = currentPath.slice();
			
			if (endX === nextX && endY === nextY) {
				newPath.push(next);
				return printPath(newPath);
			}

			const newPathSet = new Set(...newPath);
			if (newPathSet.has(next) === false) {
				newPathSet.add(next);
				newPath.push(next);
				paths.push(newPath);
			}
			
		}
	}
};

knightMoves([0, 0], [7, 7]);
