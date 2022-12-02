const {
    OPPONENTS_MAPPER,
    INPUT_TO_RESULT_MAPPER,
    RESULT_MAPPER,
    RULES,
    POINTS_MAPPER
} = require("./constants")
const {readInput} = require("../utils");

const task_2 = () => {
    const fileContent = readInput(2);

    return fileContent.reduce((currentTotal, roundString) => {
        const values = roundString.split(' ');
        if (!values[0] || !values[1]) return currentTotal;

        const elfsValue = OPPONENTS_MAPPER[values[0]];
        const resultPoint = RESULT_MAPPER[INPUT_TO_RESULT_MAPPER[values[1]]];

        let myValuePoint = 0;
        switch (resultPoint) {
            case RESULT_MAPPER.win:
                myValuePoint = POINTS_MAPPER[RULES[elfsValue].looses]
                break;
            case RESULT_MAPPER.loose:
                myValuePoint = POINTS_MAPPER[RULES[elfsValue].beats]
                break;
            case RESULT_MAPPER.draw:
                myValuePoint = POINTS_MAPPER[elfsValue]
                break;
        }

        return resultPoint + myValuePoint + currentTotal;
    }, 0)
}

console.log('Result ', task_2())