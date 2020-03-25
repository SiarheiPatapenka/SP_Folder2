//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
{
  const a = 3,
        b = 2;

  console.log(a+b<4 ? "wrong" : "too much")
  // SHOULD BE DELETED if (a + b < 4) {
  // SHOULD BE DELETED  console.log('wrong');
  // SHOULD BE DELETED} else {
  // SHOULD BE DELETED  console.log('too much');
  // SHOULD BE DELETED}
}

/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */

 //  -=ternary operator=-
{
    const x = 3;
    const y = 7;
    (x<10 && y<10 ? z=x+y : z=x*y);
    console.log('z1=',z);
}

//  -= if else=-
{
  const x = 3;
  const y = 7;
  if (x<10 && y<10) {
      console.log('z2=', z=x+y);
      } else {
      console.log('z2=', z=x*y);
      }
  }

/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */
{
    const x = 3;
    const y = 7;
    const operator = "add";
    if (operator =="add") {console.log('x+y=', x+y);
    }
    if (operator =="substract") {console.log('x-y=', x-y);
    }
    if (operator =="multiply") {console.log('x*y=', x*y);
    }
    if (operator =="divide") {console.log('x/y=', x/y);
    }
}
