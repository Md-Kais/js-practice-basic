// In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

//create a new array

var points = [];

//check array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp
//array methods

//1.concat: used to join two or more arrays;
var kasi = ["kasi", "ajsi", 2, 3, 4, 5, 6, 7, 8, 89];
var ks = [3, 4, 5, "p"];
var js = ["ajsi", 2, 4];
var ts = js.concat(ks, kasi);
console.log(ts);

//2.copywithin: The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
// Note: this method overwrites the original array.This method will never add more items to the array.

//copyWithin(target,start,end);



//add a new object in arrray
//  points.push(5);
// points.push(8);
// // console.log(points);
// //delete an element or object from an array
//     points.pop();
// // console.log(points);//check the position! position is must needed!
// //add new element at first    
// //unshift
//     points.unshift(4);
// // console.log(points);
//   points.shift();

//slice

points = [5, 6, 7, 8, 9, 0, 10];
var result = points.slice(1, 3);

console.log(points); console.log(result);