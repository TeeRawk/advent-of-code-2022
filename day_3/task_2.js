const {readInput} = require("../utils");
const {getLetterAlphabetPriority} = require("./utils");

const task_2 = () => {
    const fileContent = readInput(3);

    let total = 0;

    let group = []

    fileContent.forEach((string) => {
        if (!string) return;

        group.push(string)
        if (group.length < 3) {
            return;
        }

        const firstElfsBackpack = group[0];
        const secondElfsBackpack = group[1];
        const thirdElfsBackpack = group[2];

        const encounteredLetters = [];
        let sum = 0;

        for (const itemInFirst of firstElfsBackpack) {
            if (secondElfsBackpack.includes(itemInFirst) && thirdElfsBackpack.includes(itemInFirst) && !encounteredLetters.includes(itemInFirst)) {
                encounteredLetters.push(itemInFirst)
                sum += getLetterAlphabetPriority(itemInFirst)
            }
        }
        total += sum;
        group = []
    })

    return total;
}

console.log('Task2', task_2())