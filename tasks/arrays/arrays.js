/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */

 function getCharactersNames(chars) {
    let masname = [];
    for ( let element of chars)  {
     masname.push(element.name);   
      }     
     
    return masname;
    }
//console.log(getCharactersNames([{name:'Vasia'}, {namedsd:'Vasia'}, {name:'Petia'}]));


/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
   
    for ( let element of chars)  {
      console.log(element.name );   
      }     
      
    }
   
/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    return chars.filter(el => (el.species !== 'Human'));
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    return chars.find(el => (el.name == 'Jerry Smith'));
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    return chars.every(char => char.species === 'Human');  
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    return  chars.some(char => char.type === "Fish-Person");  
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {
    let minelement = arr[0];
    for (let i = 1; i < arr.length; i++) {
            if (arr[i] < minelement) {
                minelement = arr[i]}
    }
     return arr.indexOf(minelement);
}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
