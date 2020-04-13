/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (str >= 0) {
    return 'This is not a string!';
}

else {
    let elements = str.split('');
elements.reverse();
    return elements.join('');
  }
}
  console.log(reverseString(123));

/**
 * 1. Calculate a century by given year
 * if a number is passed
* @param {number} year
*/
function centuryFromYear(year) {
return Math.ceil(year/100);
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  let re = new RegExp(char, 'g');
  found = str.match(re);
if (str.match(re) == null) {
    return 0;
 }

  else 
  return found.length;
} 

console.log(strCount('ghfghhhhh', 'g'));


/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
}
else {
   return str.slice(0,num) + '...';
}
 }
 console.log(truncateString('hello', 3));

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  return text.replace(/10/g, 'ten'); // $& means the whole matched string
}


console.log(replace10('sdfsf10nkj 10 110146465'));



/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  return text.replace(/\[(.*?)\]/g, '[CONFIDENTIAL]'); // $& means the whole matched string
}

console.log(replaceConfidential('[dfsdf] [dfsdfdfsgdfusdf]'));


module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};
