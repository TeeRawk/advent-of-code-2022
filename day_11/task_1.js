const fs = require("fs");

const task_1 = () => {
    const fileContent = fs.readFileSync(`day_11/input.txt`)
    const inputMonkeys = fileContent.toString().split('\n\n');

    const monkeys = [];
    const roundsCount = 19;
    const monkeyInspectedItems = []

    inputMonkeys.forEach((inputMonkey, index) => {
        if (!inputMonkey) return;

        const monkeyProperties = inputMonkey.split('\n');
        const startingItems = monkeyProperties[1]
            .replace('  Starting items: ', '')
            .split(', ')
            .map(item => Number(item))
        const operation = monkeyProperties[2].replace('  Operation: new = ', '');
        const divisibleBy = monkeyProperties[3].replace('Test: divisible by ', '');
        const successMonkeyIndex = monkeyProperties[4].replace('If true: throw to monkey ', '');
        const failureMonkeyIndex = monkeyProperties[5].replace('If false: throw to monkey ', '');

        monkeys.push({
            startingItems,
            operation,
            test: {
                divisibleBy: Number(divisibleBy),
                successMonkeyIndex: Number(successMonkeyIndex),
                failureMonkeyIndex: Number(failureMonkeyIndex),
            }
        })
        monkeyInspectedItems.push(0);
    })

    for (let round = 0; round <= roundsCount; round++) {
        monkeys.forEach((monkey, currentOwnerIndex) => {
            monkey.startingItems.forEach((item, index) => {
                const worryLevel = Math.floor(eval(monkey.operation.replaceAll('old', item.toString())) / 3);
                const newItemOwner = worryLevel % monkey.test.divisibleBy === 0 ? monkey.test.successMonkeyIndex : monkey.test.failureMonkeyIndex;
                monkeys[newItemOwner] = {
                    ...monkeys[newItemOwner],
                    startingItems: monkeys[newItemOwner].startingItems.concat(worryLevel),
                }
                monkeyInspectedItems[currentOwnerIndex] = monkeyInspectedItems[currentOwnerIndex] + 1;
            })
            monkeys[currentOwnerIndex].startingItems = [];
        })
    }

    return monkeyInspectedItems;
}

console.log('Result ', task_1())