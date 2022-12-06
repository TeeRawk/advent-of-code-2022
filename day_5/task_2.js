const fs = require("fs");

const task_2 = () => {
    const fileContent = fs.readFileSync(`day_5/input.txt`).toString().split('\n' + '\n')
    const cratesSchemaInput = fileContent[0].split('\n')
    const movingAlgorithmInput = fileContent[1].split('\n')

    let crates = {};

    let columnCounter = 0;
    let spacesCount = 0;

    for (let i = cratesSchemaInput.length - 1; i >= 0; i--) {
        const cratesInput = cratesSchemaInput[i];
        columnCounter = 0;
        if (Object.keys(crates).length === 0) {
            cratesInput.split(' ').forEach(item => {
                if (!item) return;
                crates[Number(item) - 1] = [];
            })
            continue;
        }

        cratesInput.split(' ').forEach((item, index) => {
            if (item === '') {
                if (spacesCount < 3) {
                    spacesCount++;
                    return;
                } else if (spacesCount === 3) {
                    spacesCount = 0;
                    columnCounter++
                    return;
                }
            }
            crates[columnCounter].push(item);
            columnCounter++
        })
    }

    movingAlgorithmInput.forEach((moveAction, index) => {
        if (!moveAction) return;
        const moveParameters = moveAction.replace(/[a-zA-Z]+ +/g, '').trim().split(' ');


        const cratesToMove = Number(moveParameters[0])
        const fromColumnIndex = Number(moveParameters[1])
        const toColumnIndex = Number(moveParameters[2])

        const carriedOverCrates = crates[fromColumnIndex - 1]
            .slice(crates[fromColumnIndex - 1].length - cratesToMove, crates[fromColumnIndex - 1].length)

        crates[toColumnIndex - 1] = crates[toColumnIndex - 1].concat(carriedOverCrates)
        crates[fromColumnIndex - 1] = crates[fromColumnIndex - 1].slice(0, crates[fromColumnIndex - 1].length - cratesToMove)
    })

    return Object.values(crates).reduce((value, item) => {

        return value + item[item.length - 1]
    }, '');
}

console.log('Result ', task_2())