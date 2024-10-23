# knights-travails
Knights Travails is a project for The Odin Project (https://www.theodinproject.com/lessons/javascript-knights-travails).

The goal is to find the shortest possible path between two squares on a chessboard using the Knight. I decided to use a queue to perform a breadth first search after generating every possible move, given the starting position.

```javascript
import { possibleMoves, equalCoordinates, printPath } from './helpers.js';

const knightMoves = (start, end) => {
// A queue is initialized with just the starting position.
	const paths = [[start]];

// Since a Knight is able to visit every square given enough moves,
// a simple while (true) loop is used.
	while (true) {

// The first path is dequeued and using the last position in that path,
// every possible following move is generated.
		const currentPath = paths.shift();
		const lastPosition = currentPath[currentPath.length - 1];
		const nextPosition = possibleMoves(lastPosition);

// For each new possible position, a new path is created.
// Using a set, it's determined if that square has been visited,
// and if not it's added, and that path is then enqueued.
		for (let pos of nextPosition) {
			const newPath = currentPath.slice();
			const newPathSet = new Set(...newPath);
			if (newPathSet.has(pos) === false) {
				newPathSet.add(pos);
				newPath.push(pos);
				paths.push(newPath);
			}

// If the last coordinate is the given end square,
// function execution is immediately halted and the results printed.
			if (equalCoordinates(newPath[newPath.length - 1], end)) {
				return printPath(newPath);
			}
		}
	}
};

knightMoves([0, 0], [7, 7]);
```
