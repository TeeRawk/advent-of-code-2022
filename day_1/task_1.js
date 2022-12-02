const {readInput} = require("./../utils.js")

//most calories carried by 1 elf
const task_1 = () => {
    const fileContent = readInput(1);
    let max = 0;
    let currentSum = 0;

    fileContent.forEach((item) => {
        if (!item || item === '/n') {
            if (max < currentSum) {
                max = currentSum;
            }
            currentSum = 0;
            return;
        }
        const number = Number(item);

        if (!Number.isNaN(number)) {
            currentSum += number;
        }
    })

    return max;
}

console.log('Result', task_1())