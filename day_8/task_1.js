const {readInput} = require("../utils");

const task_1 = () => {
    const input = readInput(8)
    const treesMatrix = [];
    const visibleTrees = new Set();

    input.forEach((item, index) => {
        if (!item) return;
        treesMatrix[index] = [];
        for (let treeIndex = 0; treeIndex < item.length; treeIndex++) {
            const treeHeight = Number(item[treeIndex])
            treesMatrix[index].push(treeHeight);
        }
    })


    treesMatrix.forEach((row, rowIndex) => {
        let max = -1;

        for (let i = 0; i < row.length; i++) {
            if (row[i] > max) {
                visibleTrees.add(`${rowIndex},${i}`);
                max = row[i]
            }
        }
        max = -1;
        for (let i = row.length - 1; i >= 0; i--) {
            if (row[i] > max) {
                visibleTrees.add(`${rowIndex},${i}`);
                max = row[i]
            }
        }
    })

    for (let columnIndex = 0; columnIndex < treesMatrix[0].length; columnIndex++) {
        let max = -1;
        for (let i = 0; i < treesMatrix.length; i++) {
            if (treesMatrix[i][columnIndex] > max) {
                visibleTrees.add(`${i},${columnIndex}`);
                max = treesMatrix[i][columnIndex]
            }
        }
        max = -1;
        for (let i = treesMatrix.length - 1; i >= 0; i--) {
            if (treesMatrix[i][columnIndex] > max) {
                visibleTrees.add(`${i},${columnIndex}`);
                max = treesMatrix[i][columnIndex]
            }
        }
    }


    console.log('Trees ', treesMatrix)

    return visibleTrees.size;
}


console.log('Result', task_1())