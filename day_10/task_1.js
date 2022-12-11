const {readInput} = require("../utils");

const instructionTypesDurations = {
    'addx': 2,
    'noop': 1,
}


const task_1 = () => {
    const instructions = readInput(10);

    const cycleNumberToStart = 20;
    const cycleStep = 40;

    let x = 1;
    let currentInstructionDuration = 1;
    let cycleNumber = 0;

    let result = 0;

    for (let i = 0; i < instructions.length;) {
        cycleNumber++;
        const instruction = instructions[i].split(' ');
        const instructionType = instruction[0];
        const instructionArgument = instruction[1];
        const estimatedInstructionDuration = instructionTypesDurations[instructionType];

        if (cycleNumber === cycleNumberToStart || (cycleNumber - cycleNumberToStart) % cycleStep === 0) {
            result += cycleNumber * x;
        }

        if (currentInstructionDuration === estimatedInstructionDuration) {
            if (instructionType === 'addx') {
                x += Number(instructionArgument);
            }

            currentInstructionDuration = 0;
            i++;
        }

        currentInstructionDuration++;
    }

    return result;
};

console.log('Result ', task_1())