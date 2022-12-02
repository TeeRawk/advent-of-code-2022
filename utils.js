const fs = require("fs");

module.exports = {
    readInput(day) {
        const fileContent = fs.readFileSync(`day_${day}/input.txt`)
        return fileContent.toString().split('\n');
    }
}