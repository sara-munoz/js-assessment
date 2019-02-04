stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    const stringsArray = str.match(/(.)\1*/g);
    const newString = [];
    stringsArray.forEach((element) => {
      if (element.length < amount) {
        newString.push(element);
      } else {
        newString.push(element.slice(0, amount));
      }
    });
    return newString.toString()
      .replace(/\,/g, '');
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    const splitString = str.split('');
    const reverseArray = splitString.reverse();
    return reverseArray.join('');
  },
};
