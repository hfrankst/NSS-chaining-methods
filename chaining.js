"use strict";

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log("The Array: ", integers);

/* In one line of code, do the following:

Then output (either in the DOM or the console) the sum of all the resulting numbers.

*/

var doneZo = integers.sort(function(a, b){return b - a}).splice(4, 10).map(function(num){return (num * 1.5) - 1}).reduce(function(a, b){return a + b});
console.log("The finished product: ", doneZo);
// var sorted = integers.sort(function(a, b){return b - a}).splice(4, 10).map(function(num){return (num * 1.5) - 1}).reduce(function(a, b){return a + b});
// var taken = sorted.splice(4, 10);
// var multiplied = sorted.map(function(num){return (num * 1.5) - 1});
// var sumOfAll = sorted.reduce(function(a, b){return a + b});
// console.log("Array sorted in descending order: ", sorted);
// console.log("Integers greater than 19 have been taken off: ", taken);
// console.log("Each number has been multiplied by 1.5: ", multiplied);
// console.log("The sum of each of these numbers: ", sumOfAll);
// console.log("The array has been sorted, shrunk, multiplied, subtracted from, and sumed up: ", doneZo);