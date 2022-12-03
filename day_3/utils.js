module.exports = {
    getLetterAlphabetPriority(letter) {
        const letterCode = letter.charCodeAt(0);
        return letterCode >= 97 ? letterCode - 96 : letterCode - 38;
    }
}