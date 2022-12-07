const {buildFileTreeWithInput} = require("./utils");
const {readInput} = require("../utils");

const task_1 = () => {
    const input = readInput(7)
    const fileTree = buildFileTreeWithInput(input);

    return Object.values(fileTree).reduce((currentSum, currentDir) => {
        if (currentDir.totalSize <= 100000) {
            return currentSum + currentDir.totalSize;
        }

        return currentSum;
    }, 0);
}


console.log('Result', task_1())