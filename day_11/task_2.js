const fs = require("fs");

const sumSuperLargeNumbers = (num1, num2) => {
    if (num1.length === 0) return num2;
    if (num2.length === 0) return num1;

    const result = [];
    let leftover = 0;
    const longestNumber = num1.length >= num2.length ? num1 : num2;
    const shortestNumber = num1.length >= num2.length ? num2 : num1;

    for (let longestNumberIndex = longestNumber.length - 1; longestNumberIndex >= 0; longestNumberIndex--) {
        const longestNumberDigit = longestNumber[longestNumberIndex] + leftover;
        const normalizedIndexShortest = shortestNumber.length !== longestNumber.length ? longestNumberIndex - (longestNumber.length - shortestNumber.length) : longestNumberIndex;
        const shortestNumberDigit = normalizedIndexShortest >= 0 ? shortestNumber[normalizedIndexShortest] : 0;

        const sumResult = longestNumberDigit + shortestNumberDigit;
        const hasLeftOver = Math.floor(sumResult / 10) > 0;
        result.push(sumResult % 10);
        if (longestNumberIndex === 0 && hasLeftOver) {
            result.push(Math.floor(sumResult / 10));
            leftover = 0;
            break;
        }
        if (hasLeftOver) {
            leftover = Math.floor(sumResult / 10);
        } else {
            leftover = 0;
        }
    }

    return result.reverse();
}

const multiplySuperLargeNumbers = (num1, num2) => {
    let result = [];
    const longestNumber = num1.length > num2.length ? num1 : num2;
    const shortestNumber = num1.length > num2.length ? num2 : num1;
    let leftover = 0;
    for (let shortestNumberIndex = shortestNumber.length - 1; shortestNumberIndex >= 0; shortestNumberIndex--) {
        const shortestNumberIndexDigit = shortestNumber[shortestNumberIndex];
        const localResult = [];
        for (let longestNumberIndex = longestNumber.length - 1; longestNumberIndex >= 0; longestNumberIndex--) {
            const longestNumberDigit = longestNumber[longestNumberIndex];
            const multiplyResult = (shortestNumberIndexDigit * longestNumberDigit) + leftover;
            const hasLeftOver = multiplyResult >= 10;

            localResult.push(multiplyResult % 10);

            if (longestNumberIndex === 0 && hasLeftOver) {
                localResult.push(Math.floor(multiplyResult / 10));
                leftover = 0;
                break;
            }

            if (hasLeftOver) {
                leftover = Math.floor(multiplyResult / 10);
            } else {
                leftover = 0;
            }
        }
        const reversedLocal = localResult.reverse();
        for (let i = 0; i <= (shortestNumber.length - shortestNumberIndex - 2); i++) {
            reversedLocal.push(0);
        }

        result = sumSuperLargeNumbers(reversedLocal, result);
    }

    return result;
}
const modSuperLargeNumber2 = (divident, divisor) => {
    return divident.map(c => parseInt(c)).reduce((remainder, value) => (remainder * 10 + value) % divisor, 0);
};

const modSuperLargeNumber1 = (superLargeNumber, regularNum) => {
    let divident = superLargeNumber.join('')
    const partLength = 10;

    while (divident.length > partLength) {
        const part = divident.substring(0, partLength);
        divident = (part % regularNum) + divident.substring(partLength);
    }

    return divident % regularNum;
}

const modSuperLargeNumber = (superLargeNumber, regularNum) => {
    let result = [];
    let divisible = '';
    for (let numberIndex = 0; numberIndex < superLargeNumber.length;) {
        const numberDigit = superLargeNumber[numberIndex];
        let divisibleNumber = Number(divisible);
        if (divisibleNumber <= regularNum) {
            divisible += numberDigit;
            numberIndex++
            divisibleNumber = Number(divisible);
        }
        if (divisibleNumber < regularNum) {
            continue;
        }
        const divideResult = Math.floor(divisible / regularNum);
        result.push(divideResult);
        const leftOver = divisibleNumber - (divideResult * regularNum);
        divisible = leftOver.toString()
    }

    return Number(divisible);
}

const task_1 = () => {
    const fileContent = fs.readFileSync(`day_11/input.txt`)
    const inputMonkeys = fileContent.toString().split('\n\n');

    const monkeys = [];
    const roundsCount = 9999;
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
    const divisor = monkeys.reduce((acc, monkey) => {
        return acc * monkey.test.divisibleBy;
    }, 1);

    for (let round = 0; round <= roundsCount; round++) {
        monkeys.forEach((monkey, currentOwnerIndex) => {
            monkey.startingItems.forEach((item, index) => {
                let worryLevel = Math.floor(eval(monkey.operation.replaceAll('old', item.toString())));
                worryLevel = worryLevel % divisor;

                const gooApproach = worryLevel % monkey.test.divisibleBy === 0;

                const newItemOwner = gooApproach ? monkey.test.successMonkeyIndex : monkey.test.failureMonkeyIndex;
                monkeys[newItemOwner].startingItems.push(worryLevel);
                monkeyInspectedItems[currentOwnerIndex] = monkeyInspectedItems[currentOwnerIndex] + 1;
            })
            monkeys[currentOwnerIndex].startingItems = [];
        })
    }

    return monkeyInspectedItems;
}

console.log('Result ', task_1())