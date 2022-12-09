const {readInput} = require("../utils");
const {getNewTailPosition} = require("./utils");

const task_2 = () => {
    const input = readInput(9)
    const visitedTailPositions = new Set();
    const startingPoint = [300, 300]
    let headPosition = [...Array(10).keys()].map(() => ([startingPoint[0], startingPoint[1]]))

    input.forEach((item) => {
        if (!item) return;

        const instructions = item.split(' ');
        const direction = instructions[0]
        const steps = Number(instructions[1])

        for (let i = 1; i <= steps; i++) {
            headPosition = headPosition.reduce((result, position, index) => {
                if (index === 0) {
                    switch (direction) {
                        case 'U':
                            position[1]--;
                            break;
                        case 'D':
                            position[1]++;
                            break;
                        case 'L':
                            position[0]--;
                            break;
                        case 'R':
                            position[0]++;
                            break;
                    }
                    return [position];
                }

                let newTailPosition = getNewTailPosition(result[index - 1], position);
                if (index === headPosition.length - 1) {
                    visitedTailPositions.add(newTailPosition.join(','))
                }
                result.push(newTailPosition);

                return result
            }, [])
        }
    })
    return visitedTailPositions.size;
}


console.log('Result', task_2())