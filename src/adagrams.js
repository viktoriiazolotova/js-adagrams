class Adagrams {
  //############ WAVE 1 ###############

  /**
   * Function takes object.
   * Returns random key from dictionary.
   */
  static getRandomLetter = (letterPool) => {
    const keys = Object.keys(letterPool);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  /**
   *Return an array of ten strings from the LETTER_POOL.
   */
  static drawLetters = () => {
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
    const copyLetterPool = { ...LETTER_POOL };
    const arrayLetters = [];
    while (arrayLetters.length < 10) {
      let letter = Adagrams.getRandomLetter(copyLetterPool);
      arrayLetters.push(letter);
      copyLetterPool[letter] -= 1;
      if (copyLetterPool[letter] === 0) {
        delete copyLetterPool[letter];
      }
    }
    return arrayLetters;
  };

  //############ WAVE 2 ###############
  // Solution # 1
  /**
   * Returns true if every letter in the input word is available
   * (in the right quantities) in the lettersInHand.
   */
  static usesAvailableLetters = (input, lettersInHand) => {
    for (const i in input) {
      let letter = input[i].toUpperCase();
      if (!lettersInHand.includes(letter)) return false;
      else delete lettersInHand[i];
    }
    return true;
  };

  //Solution # 2
  /**
   * Function takes array and item.
   * Return frequency of element in array.
   */
  // const itemCounter = (array, item) => {
  //   return array.filter((currentItem) => currentItem == item).length;
  // };

  // export const usesAvailableLetters = (input, lettersInHand) => {
  //   for (let letter of input) {
  //     if (!lettersInHand.includes(letter)) {
  //       return false;
  //     } else {
  //       let count1 = itemCounter(input.split(""), letter);
  //       let count2 = itemCounter(lettersInHand, letter);
  //       if (count1 > count2) return false;
  //     }
  //   }
  //   return true;
  // };

  //############ WAVE 3 ###############

  /**
   * Returns the score of the given word.
   */
  static scoreWord = (word) => {
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
    if (word.length === 0) return 0;

    let totalScore = 0;
    word = word.toUpperCase();
    if (word.length >= 7 && word.length <= 10) totalScore += 8;

    for (const letter of word) {
      totalScore += SCORE_POOL[letter];
    }
    return totalScore;
  };

  //############ WAVE 4 ###############
  /**
   * Takes one parameter: words, which is an array of strings.
   * Returns a single object that represents
   * the data of a winning word and its score.
   */
  static highestScoreFrom = (words) => {
    //1. Create new empty array highestScoreWordList
    //2. Iterate thru array of words:
    //3. if score of current word > maxScore, then assign the current word
    // (word with maxScore) to the array as first element
    // and reassign wordScore to the maxScore
    //4. else if scores are eaqual, add current word to the array.
    let maxScore = 0;
    let highestScoreWordList = [];

    for (const word of words) {
      let wordScore = Adagrams.scoreWord(word);
      if (wordScore > maxScore) {
        highestScoreWordList = [word];
        maxScore = wordScore;
      } else if (wordScore === maxScore) {
        highestScoreWordList.push(word);
      }
    }
    //In case of ties:
    //1.Iterate thru array of highestScoreWordList:
    //2. if word.length === 10, word => winnerWord, break out of loop,
    //  since we found word with 10 letters and it is first word that
    //  needs to be returned if other words in array also have length === 10
    //3. else if score of current word < length of the shortest word,
    // then word with fewer letters => winnerWord
    //4. otherwise if lengths of the words are equal:
    // winnerWord = highestScoreWordList[0]

    let shortLength = highestScoreWordList[0].length;
    let winnerWord = highestScoreWordList[0];

    for (const word of highestScoreWordList) {
      if (word.length === 10) {
        winnerWord = word;
        break;
      } else if (word.length < shortLength) {
        winnerWord = word;
        shortLength = word.length;
      }
    }

    return { word: winnerWord, score: maxScore };
  };
}
export default Adagrams;
