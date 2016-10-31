// 1 - Use a built-in method of Arrays
// to add the value 32 to the end of
// the following array.

var arr = [3, 4, 6, 0];
arr.push(32);
// 2 - Remove the values 4 & 6 from
// arr using the splice method.
console.log(arr);
arr.splice(1,2);

// 3 - Use the sort method to order
// each array value from smallest
// to largest.

arr.sort();

// 4 - Use the forEach method to
// halve the value of each
// number in the array.

arr.forEach(function(arr) {
  arr = arr/2;
});

console.log(arr);
