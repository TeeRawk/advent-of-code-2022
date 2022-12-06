const fs = require("fs");

module.exports = {
    findFirstStingWithUniqueCharacters(expectedCharCount) {
        const fileContent = fs.readFileSync(`day_6/input.txt`).toString()

        let counter = 0;
        let resultString = '';

        for (let index = 0; index < fileContent.length; index++) {
            const possibleMarker = fileContent.substring(index, index + expectedCharCount)

            if (new Set(possibleMarker).size === expectedCharCount) {
                resultString = possibleMarker;
                counter = index + possibleMarker.length;
                break;
            }
        }

        return counter;
    }
}