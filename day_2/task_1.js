const {readInput} = require("../utils");

const {MY_MAPPER, OPPONENTS_MAPPER, POINTS_MAPPER, RESULT_MAPPER, RULES} = require("./constants")

const task_1 = () => {
    const fileContent = readInput(2);

    return fileContent.reduce((currentTotal, roundString) => {
        const values = roundString.split(' ');
        if (!values[0] || !values[1]) return currentTotal;

        const elfsValue = OPPONENTS_MAPPER[values[0]];
        const myValue = MY_MAPPER[values[1]];
        const myValuePoint = POINTS_MAPPER[myValue];

        if (elfsValue === myValue) {
            return currentTotal + RESULT_MAPPER.draw + myValuePoint
        }

        const resultPoint = RULES[myValue].beats === elfsValue ? RESULT_MAPPER.win : RESULT_MAPPER.loose;
        return resultPoint + myValuePoint + currentTotal;
    }, 0)
}

console.log('Result ', task_1())