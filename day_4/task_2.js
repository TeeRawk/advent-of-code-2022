const {readInput} = require("../utils");

const task_2 = () => {
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

        const doesFirstLowerBoundOverlap = firstElfLowerBound >= secondElfLowerBound && firstElfLowerBound <= secondElfHigherBound;
        const doesFirstHigherBoundOverlap = firstElfHigherBound >= secondElfLowerBound && firstElfHigherBound <= secondElfHigherBound;
        const doesSecondLowerBoundOverlap = secondElfLowerBound >= firstElfLowerBound && secondElfLowerBound <= firstElfHigherBound;
        const doesSecondHigherBoundOverlap = secondElfHigherBound >= firstElfLowerBound && secondElfHigherBound <= firstElfHigherBound;
        const isOverlapping = doesFirstLowerBoundOverlap || doesFirstHigherBoundOverlap || doesSecondLowerBoundOverlap || doesSecondHigherBoundOverlap;

        return isOverlapping ? currentValue + 1 : currentValue;
    }, 0)
}

console.log('Result ', task_2())