Arrays
Introduction
20 min
Our TypeScript journey has now led us to a new destination: Array-bia. Typing 
arrays
Preview: Docs Loading link description
 is a little bit different than working with primitive types. This is because arrays usually contain many pieces of data. Keeping track of the array’s type means keeping track of every element’s type. For example:

```bash
let firstArray = [1, 2, 3, 4];
let secondArray =  [5, '6', [7]];
```

We can see that firstArray has elements that are all number types. On the other hand, secondArray has elements of varying types: number, string, and Array. Both are examples of valid JavaScript arrays. As we’ll soon explore, TypeScript makes it very easy to keep track of element types in arrays, such as those above.

For now, though, let’s make life difficult by pretending that TypeScript didn’t have special ways of typing arrays. How hard would it be to enforce type consistency?

Instructions
1.
Imagine you are a software engineer for a company that keeps track of customer names in the array customersArray. The company’s codebase loops through this array to generate an annual report. The code was written by an untrained intern over 10 years ago, and it will crash the entire system if customersArray is found to contain any data of the number type!

Because you’re not using TypeScript, you need to write the function checkCustomersArray() to check that every element of customersArray is a string. For any element el that is not a string, this function should log an error message using the statement console.log(`Type error: ${el} should be a string!`).

Call the checkCustomersArray() function after you’ve defined it to see your messages print out.


2.
OK, you found a couple of errors. (Wouldn’t it be nice if this error checking was automatic?) You’ll fix them later. Right now, there is a more pressing concern. The array customersArray is constantly being altered by existing code. The last thing we want is for somebody to .push() a non-string value into this array.

Write an alternative pushing function called stringPush() that takes one argument: val, the value meant to be pushed into the array. The function should check if the val is a string and .push() it into the customersArray array only if it is a string.


3.
Even with all this, people could ruin your precious string array by writing code like customersArray[4] = 4. You don’t have to waste time finding a way around this right now.

Now you can see how needlessly difficult manual type-checking is. And imagine, you would have to write even more code if you needed arrays of numbers! It’s all too much.

Click the “Run” button to move on to the next exercise, where you will learn how TypeScript makes it easy to maintain a typed array!