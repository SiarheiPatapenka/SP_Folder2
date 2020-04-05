/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
 return a + b;

}
console.log(add(-1, -2));

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    {firstName: "John", lastName: "Dou"}
 *    lastName: "Dou" 
 * }
 */
function getFullName(sum) {
    return sum.firstName + ' ' + sum.lastName;
    } 
console.log(getFullName({firstName: "John", lastName: "Dou"}));


/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
<<<<<<< HEAD
    return n % 2>0 ? true : false;
=======
    
>>>>>>> dfb4b2434a8077e0cb6e1717f10f734ed48aa2cc
}
console.log(isOdd(2));

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
// TOODDDDDDDDDDDDDOOOOO 1
function getShortest(wordArray) {
	let shortelement = wordArray[0];
for (let i = 1; i < wordArray.length; i++) {
		if (wordArray[i].length < shortelement.length) {
			shortelement = wordArray[i]}
}
 return shortelement;
}
console.log(getShortest(["one", "two", "three", "x"]));

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */

 function getGoogle(n) {
    let letter = 'o'
    return 'g' + letter.repeat(n) + 'gle';    

}
console.log(getGoogle(3));

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
<<<<<<< HEAD

 function getUser(firstName=null, lastName=null, age=null) {
    return {firstName: firstName, lastName: lastName, age: age};

=======
function getUser(firstName, lastName, age) {
    
>>>>>>> dfb4b2434a8077e0cb6e1717f10f734ed48aa2cc
}
console.log(getUser('John', 'Dou', 42));

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */
// TOODDDDDDDDDDDDDOOOOO 2
function getTotalPath(path) {
<<<<<<< HEAD
    let sum=0;
    for (let element of path) {
        //sum=substr.join('');
        sum +=element.distance;
    }
    return sum;
=======
    
>>>>>>> dfb4b2434a8077e0cb6e1717f10f734ed48aa2cc
}
    console.log( getTotalPath([ { direction: "Kiyv - Minsk", distance: 567 }, { direction: "Kiyv - Paris", distance: 2402 }, { direction: "Paris - London", distance: 466 } ]))

<<<<<<< HEAD
/**
 * write function that returns function that calculates given discount
 * e.g
 * const discount10 = discountFunction(10);
 * discount10(90) //returns 81
 */
// TOODDDDDDDDDDDDDOOOOO 3
    //function discountFunction(discount) {

//}
=======
>>>>>>> dfb4b2434a8077e0cb6e1717f10f734ed48aa2cc

module.exports = {
    add,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
<<<<<<< HEAD
    
};
=======
};
>>>>>>> dfb4b2434a8077e0cb6e1717f10f734ed48aa2cc
