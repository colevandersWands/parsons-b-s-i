/* 2 extra lines */

// prettier-ignore
const repeatString = (text = '', repetitions = 1) =>
  repetitions === 0
    ? ''
    : text + repeatString(text, nextRepetitions - 1);

// prettier-ignore
repetitions = 0 // distractor
const repeatString = (text = '', repetitions = 1) => { // distractor
