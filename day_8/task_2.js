const {readInput} = require("../utils");

const task_2 = () => {
    const input = readInput(8)
    const treesMatrix = [];
    const treesToScenicScores = {};

    input.forEach((item, index) => {
        if (!item) return;
        treesMatrix[index] = [];
        for (let treeIndex = 0; treeIndex < item.length; treeIndex++) {
            const treeHeight = Number(item[treeIndex])
            treesMatrix[index].push(treeHeight);
        }
    })

    let maxScore = 0;


    treesMatrix.forEach((row, rowIndex) => {
        row.forEach((tree, columnIndex) => {
            let rightScore = 0;
            for (let i = columnIndex + 1; i < row.length; i++) {
                rightScore++
                if (treesMatrix[rowIndex][i] >= tree) {
                    break;
                }
            }
            let leftScore = 0;
            for (let i = columnIndex - 1; i >= 0; i--) {
                leftScore++;
                if (treesMatrix[rowIndex][i] >= tree) {
                    break;
                }
            }
            let bottomScore = 0;
            for (let i = rowIndex + 1; i < treesMatrix.length; i++) {
                bottomScore++;
                if (treesMatrix[i][columnIndex] >= tree) {
                    break;
                }
            }
            let topScore = 0;
            for (let i = rowIndex - 1; i >= 0; i--) {
                topScore++;
                if (treesMatrix[i][columnIndex] >= tree) {
                    break;
                }
            }

            const totalScore = rightScore * leftScore * bottomScore * topScore;

            if (totalScore >= maxScore) {
                maxScore = totalScore;
            }
        })
    });

    return maxScore;
}


console.log('Result', task_2())