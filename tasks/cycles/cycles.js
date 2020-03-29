/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount=0;

  //PLACE YOUR CODE HERE
  if (redemption >= 0 && redemption <= 350) return 0
  if (redemption >=351   && redemption <= 1350) return 15
  if (redemption >=1351  && redemption <= 2700) return 30
  if (redemption >=2701  && redemption <= 6500) return 45
 
  return discount;
}
console.log(calculateDiscount(6500));

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */ 
//using for
 {
  const i = 10; //10! = 3628800
  let x=1
  for (let i = 1; i<=10; i++) {
     (x=x*i);
  }
  console.log('factorial for =', x);   
  
}
//using while
{
  let i = 10; //10! = 3628800
  let x=1
  while (i>=1) {
      (x=x*i); 
      i--;
  }
  console.log('factorial while=', x);   
 }
//using  do while
 {
  let i = 10; //10! = 3628800
  let x=1
  do { 
      (x=x*i);
      i--;
   }
   while (i >=1 );
   console.log('factorial do while=', x); 
   
}

/**
 * return concatenated string from an array of substring
 */
{
  let sum='';
  const substr = ["I", " love", " JS"];
  for (let element of substr) {
    //sum=substr.join('');
    sum +=element;
}
console.log (sum);
}

/**
 * calculate a total of income of certain person
 */
{ let total=0;
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
  for  (let property in personIncomes ) {
    (total += personIncomes[property]);
}
console.log ('Income is', total);
}


module.exports = calculateDiscount;
