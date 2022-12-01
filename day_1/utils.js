const fs = require("fs");

module.exports = {
    readInput() {
        const fileContent = fs.readFileSync("day_1/input.txt")
        return fileContent.toString().split('\n');
    }
}