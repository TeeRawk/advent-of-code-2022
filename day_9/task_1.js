const {readInput} = require("../utils");
const {getNewTailPosition} = require("./utils");

const task_1 = () => {
    const input = readInput(9)
    const visitedTailPositions = new Set();
    const startingPoint = [4, 0]
    let headPosition = [startingPoint[0], startingPoint[1]];
    let tailPosition = [startingPoint[0], startingPoint[1]];

    input.forEach((item) => {
        if (!item) return;

        const instructions = item.split(' ');
        const direction = instructions[0]
        const steps = Number(instructions[1])

        for (let i = 1; i <= steps; i++) {
            switch (direction) {
                case 'U':
                    headPosition[1]--;
                    break;
                case 'D':
                    headPosition[1]++;
                    break;
                case 'L':
                    headPosition[0]--;
                    break;
                case 'R':
                    headPosition[0]++;
                    break;
            }
            tailPosition = getNewTailPosition(headPosition, tailPosition)
            visitedTailPositions.add(tailPosition.join(','))
        }
    })
    return visitedTailPositions.size;
}


console.log('Result', task_1())