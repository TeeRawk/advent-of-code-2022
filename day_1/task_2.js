const {readInput} = require("./utils.js")

//top three elfs by calories
const task_2 = () => {
    const fileContent = readInput();
    const sums = [];
    let currentSum = 0;

    fileContent.forEach((item) => {
        if (!item || item === '/n') {
            sums.push(currentSum);
            currentSum = 0;
            return;
        }
        const number = Number(item);

        if (!Number.isNaN(number)) {
            currentSum += number;
        }
    })

    return sums.sort((item1, item2) => item2 - item1).slice(0, 3).reduce((item, currentSum) => currentSum + item, 0);
}

console.log('Result ', task_2());