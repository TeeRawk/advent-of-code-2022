const {readInput} = require("../utils");
const {getLetterAlphabetPriority} = require("./utils");

const task_1 = () => {
    const fileContent = readInput(3);

    let total = 0;

    fileContent.forEach((string) => {
        if (!string) return;
        const firstCompartment = string.slice(0, string.length / 2);
        const secondCompartment = string.slice(string.length / 2, string.length);

        const encounteredLetters = [];
        let sum = 0;

        for (const itemInFirst of firstCompartment) {
            if (secondCompartment.includes(itemInFirst) && !encounteredLetters.includes(itemInFirst)) {
                encounteredLetters.push(itemInFirst)
                sum += getLetterAlphabetPriority(itemInFirst)
            }
        }
        total += sum;
    })

    return total;
}

console.log('Task1', task_1())