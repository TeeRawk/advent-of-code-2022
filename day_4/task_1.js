const {readInput} = require("../utils");

const task_1 = () => {
    const fileContent = readInput(4);

    return fileContent.reduce((currentValue, pairAssignment) => {
        if (!pairAssignment) return currentValue;
        const assignments = pairAssignment.split(',');
        const firstElfAssignments = assignments[0].split('-');
        const secondElfAssignments = assignments[1].split('-');

        const firstElfLowerBound = Number(firstElfAssignments[0]);
        const firstElfHigherBound = Number(firstElfAssignments[1]);

        const secondElfLowerBound = Number(secondElfAssignments[0]);
        const secondElfHigherBound = Number(secondElfAssignments[1]);


        const doesFirstIncludeSecond = firstElfLowerBound <= secondElfLowerBound && firstElfHigherBound >= secondElfHigherBound;
        const doesSecondIncludeFirst = secondElfLowerBound <= firstElfLowerBound && secondElfHigherBound >= firstElfHigherBound;

        return doesSecondIncludeFirst || doesFirstIncludeSecond ? currentValue + 1 : currentValue;
    }, 0)
}

console.log('Result ', task_1())