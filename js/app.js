'use strict';
/////////////////////////////////////

let print =[];
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
    let numSum = a + b;
    let str = `The sum of ${a} and ${b} is ${numSum}.`;
    print = [numSum, str];
    return (print) //[numSum, str];  //code after the return is unreachable by the function
}
sum()
//I HAD ORIGINALLY USED sum AS THE NAME OF MY FUNCTION AND sum AS THE NAME OF THE VARIABLE IT WAS USING INTERNALLY.  WHILE THIS MADE PERFECT SENSE TO ME WITHIN THE CONFINES OF THIS ONE FUNCTION, IT MADE THINGS CONFUSING AS I TRIED TO REFERENCE THINGS ELSEWHERE.  I THEN CHANGED THE FUNCTION NAME AND BROKE THE TESTER.

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
console.log(print);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
    let product = a * b;
    let str = `The product of ${a} and ${b} is ${product}.`;
    print = [product, str];
    return (print);

}
multiply()

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);
console.log(print);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// HERE IS HOW I WOULD DO THIS WITHOUGH REUSING THE FUNCTIONS ABOVE.
// function sumAndMultiply(a, b, c) { //eslint-disable-line
//     let sum = a + b + c;
//     let product = a * b * c;
//     let sumStr = `${a} and ${b} and ${c} sum to ${sum}.`;
//     let prodStr = `The product of ${a} and ${b} and ${c} is ${product}.`;
//     return [sum, product, sumStr, prodStr];
// }

// THIS ONE KEPT FAILING AND WAS REALLY FRUSTRATED ME.  AT FIRST I HAD WRITTEN THE RETURN STRINGS WRONG.  THEN I HAD THE ARRAY STORED OUT OF ORDER.  EXACTLY MEANS EXACTLY HUH?
function sumAndMultiply(a, b, c) { //eslint-disable-line  
    let sum1 = sum(a, b)[0];
    let sum2 = sum(sum1, c)[0];
    let product1 = multiply(a, b)[0];
    let product2 = multiply(product1, c)[0];
    let sumStr = a + ' and ' + b +' and ' + c +' sum to '+ sum2 +'.';
    let prodStr = 'The product of ' + a + ' and ' + b +' and ' + c +' is '+ product2 +'.';
    print = [sum2, product2, sumStr, prodStr];  //returns all requests to a console.log
    return (print);  //returns all requests as an array
}
sumAndMultiply()
// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);
console.log(print);


//I WENT AND LOOKED AT OTHER PEOPLE'S WORK TO TRY TO FIGURE OUT WHAT I HAD DONE WRONG AND LEARNED THAT I COULD NEST ALL OF THIS.
// HOW MOST CLASSMATES DID IT
// let newSum = sum(a, sum(b,c)[0])[0];
// let newProduct = multiply(a, multiply(b,c)[0])[0];

// HOW GUY DID IT
// let sum1 = sum(a, b)[0];
// let finalSum = sum(sum1, c)[0];
// let product1 = multiply(a, b)[0];
// let finalProduct = multiply(product1, c)[0];

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr = []) { //eslint-disable-line  The function sumArray take in (sumArr)
    let sum = 0;
    for (let i = 0; i < sumArr.length; i++){
        let currentNumber = sumArr[i];
        sum += currentNumber;
        }
    print = [sum, `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sum} is their sum.`];
    return (print);
}
//NOT MY CODE....  EXAMPLE FROM CLASS
// function sumArray(sumArr) { //eslint-disable-line
//     let (sum = 0);
//     for (let i = 0; i < sumArr.length; i++){
//         let currentNumber = sumArr[i];
//         sum += currentNumber;
//         }
//     return [sum, `${sumArr[0]}, ${sumArr[1]}, ${sumArr[0]} was passed in as an array of numbers and ${sum} is their sum.`]    


sumArray()
//Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);
console.log(print);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);
// console.log(print);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);
// console.log(print);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.