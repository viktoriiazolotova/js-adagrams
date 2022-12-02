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
//############ WAVE 1 ###############
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

//############ WAVE 2 ###############

//Solution # 1

// function to count frequency item in array
// const itemCounter = (array, item) => {
//   return array.filter((currentItem) => currentItem == item).length;
// };

// export const usesAvailableLetters = (input, lettersInHand) => {
//   for (let letter of input) {
//     // letter = letter.toUpperCase();
//     if (!lettersInHand.includes(letter)) {
//       return false;
//     } else {
//       let count1 = itemCounter(input.split(""), letter);
//       let count2 = itemCounter(lettersInHand, letter);
//       // console.log(count1, count2);
//       if (count1 > count2) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// Solution # 2
export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i in input) {
    let letter = input[i].toUpperCase();
    if (!lettersInHand.includes(letter)) {
      return false;
    } else {
      delete lettersInHand[i];
    }
  }
  return true;
};

//############ WAVE 3 ###############
export const scoreWord = (word) => {
  if (word.length === 0) {
    return 0;
  }

  let totalScore = 0;
  word = word.toUpperCase();
  if (word.length >= 7 && word.length <= 10) {
    totalScore += 8;
  }
  for (let letter of word) {
    totalScore += SCORE_POOL[letter];
  }
  return totalScore;
};

//############ WAVE 4 ###############

export const highestScoreFrom = (words) => {
  //loop thru words => create array with scores
  //do map and add word and score to the objects?
  let maxScore = 0;
  let highestScoreWord = null;

  const highScoreWordObj = {};

  for (let word of words) {
    console.log("this is word", word);
    let wordScore = scoreWord(word);
    if (wordScore > maxScore) {
      maxScore = wordScore;
      highestScoreWord = word;
      highScoreWordObj.word = highestScoreWord;
      highScoreWordObj.score = maxScore;
    } else if (wordScore === maxScore) {
      if (word.length === 10) {
        highScoreWordObj.word = word;
        highScoreWordObj.score = wordScore;
      } else if (highestScoreWord.length === 10) {
        highScoreWordObj.word = highestScoreWord;
        highScoreWordObj.score = maxScore;
        console.log("this inside of length not 10:", highScoreWordObj);
      } else if (word.length < highestScoreWord.length) {
        highScoreWordObj.word = word;
        highScoreWordObj.score = wordScore;
      } else if (word.length === highestScoreWord.length) {
        highScoreWordObj.word = highestScoreWord;
        highScoreWordObj.score = maxScore;
      }
    }
    // console.log("word is ", word, "highest word is ", highestScoreWord);
  }
  console.log("this is what is returned", highScoreWordObj);
  return highScoreWordObj;
};
