const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};
const SCORE_POOL = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};
// get random letter from copyLetterPool
const getRandomLetter = function (letterPool) {
  const keys = Object.keys(letterPool);
  return keys[Math.floor(Math.random() * keys.length)];
};

export const drawLetters = () => {
  // const copyLetterPool = JSON.parse(JSON.stringify(LETTER_POOL));
  // const copyLetterPool = Object.assign({}, LETTER_POOL);
  const copyLetterPool = { ...LETTER_POOL };
  const arrayLetters = [];
  while (arrayLetters.length < 10) {
    let letter = getRandomLetter(copyLetterPool);
    arrayLetters.push(letter);
    copyLetterPool[letter] -= 1;
    if (copyLetterPool[letter] === 0) {
      delete copyLetterPool[letter];
    }
  }
  return arrayLetters;
};
// function to count item in array
const itemCounter = (array, item) => {
  console.log("this is inside counter item", array, item);
  return array.filter((currentItem) => currentItem == item).length;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // input = split();
  // console.log(input);
  for (let letter of input) {
    console.log(letter, input);
    if (!lettersInHand.includes(letter)) {
      return false;
      // } else if (itemCounter(input, letter) <= text.split(letter).length - 1) {
    } else {
      let count1 = itemCounter(input.split(""), letter);
      let count2 = itemCounter(lettersInHand, letter);
      // console.log(count1, count2);
      if (count1 > count2) {
        return false;
      }

      // return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
