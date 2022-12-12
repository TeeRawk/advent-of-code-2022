const {readInput} = require("../utils");
const {findShortestPathToEnd} = require("./utils");


const task_1 = () => {
    const input = readInput(12);
    const heightMatrix = [];
    let startPosition = [];
    const visited = [];

    input.forEach((item, index) => {
        if (!item) return;
        heightMatrix[index] = [];
        visited[index] = [];
        for (let squareIndex = 0; squareIndex < item.length; squareIndex++) {
            const squareHeight = item[squareIndex]
            if (squareHeight === 'S') {
                startPosition = [index, squareIndex]
            }
            visited[index][squareIndex] = false;
            heightMatrix[index].push(squareHeight);
        }
    })
    return findShortestPathToEnd(startPosition, heightMatrix, visited);
};

console.log('Result ', task_1())