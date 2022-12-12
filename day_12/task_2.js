const {readInput} = require("../utils");
const {findShortestPathToEnd} = require("./utils");


const task_1 = () => {
    const input = readInput(12);
    const heightMatrix = [];
    let visited = [];
    const possibleStartingPoints = [];
    const possibleDistances = [];

    input.forEach((item, index) => {
        if (!item) return;
        heightMatrix[index] = [];
        visited[index] = [];
        for (let squareIndex = 0; squareIndex < item.length; squareIndex++) {
            const squareHeight = item[squareIndex]
            if (squareHeight === 'S' || squareHeight === 'a') {
                visited[index][squareIndex] = false;
                heightMatrix[index].push('a');
                possibleStartingPoints.push([index, squareIndex])
                continue;
            }
            visited[index][squareIndex] = false;
            heightMatrix[index].push(squareHeight);
        }
    })

    possibleStartingPoints.forEach(point => {
        visited = visited.map(item => item.map(() => false))
        const shortestPath = findShortestPathToEnd(point, heightMatrix, visited);
        if (shortestPath > 0) {
            possibleDistances.push(shortestPath);
        }
    })

    return Math.min(...possibleDistances);
};

console.log('Result ', task_1())