const {readInput} = require("../utils");

const instructionTypesDurations = {
    'addx': 2,
    'noop': 1,
}


const task_1 = () => {
    const instructions = readInput(10);
    const cycleStep = 40;

    let x = 1;
    let currentInstructionDuration = 1;
    let cycleNumber = 0;

    let spritePosition = 2;

    let resultString = '';

    for (let i = 0; i < instructions.length;) {
        cycleNumber++;
        const instruction = instructions[i].split(' ');
        const instructionType = instruction[0];
        const instructionArgument = instruction[1];
        const estimatedInstructionDuration = instructionTypesDurations[instructionType];

        let currentSymbol = ' ';

        const crtPosition = cycleNumber <= cycleStep ? cycleNumber : cycleNumber - (cycleStep * Math.floor((cycleNumber - 1) / cycleStep));

        if (crtPosition - spritePosition === 0 || crtPosition - spritePosition === 1 || crtPosition - spritePosition === -1) {
            currentSymbol = '█'
        }

        if (cycleNumber % cycleStep === 0) {
            resultString += currentSymbol + '\n';
        } else {
            resultString += currentSymbol;
        }

        if (currentInstructionDuration === estimatedInstructionDuration) {
            if (instructionType === 'addx') {
                x += Number(instructionArgument);
                spritePosition += Number(instructionArgument);
            }

            currentInstructionDuration = 0;
            i++;
        }
        currentInstructionDuration++;
    }

    return resultString;
};

console.log('Result \n', task_1())