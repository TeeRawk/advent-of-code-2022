const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';


module.exports = {
    RULES: {
        [ROCK]: {
            beats: SCISSORS,
            looses: PAPER
        },
        [PAPER]: {
            beats: ROCK,
            looses: SCISSORS
        },
        [SCISSORS]: {
            beats: PAPER,
            looses: ROCK
        }
    },

    OPPONENTS_MAPPER: {
        'A': ROCK,
        'B': PAPER,
        'C': SCISSORS,
    },

    MY_MAPPER: {
        'X': ROCK,
        'Y': PAPER,
        'Z': SCISSORS,
    },

    INPUT_TO_RESULT_MAPPER: {
        'X': 'loose',
        'Y': 'draw',
        'Z': 'win',
    },

    POINTS_MAPPER: {
        [ROCK]: 1,
        [PAPER]: 2,
        [SCISSORS]: 3
    },

    RESULT_MAPPER: {
        win: 6,
        draw: 3,
        loose: 0,
    },
}