"use strict";

// Complete this algo
const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  console.log("end: ", end);
  //let start = 0;
  //let end = array.length-1;
  //let middle = Math.round(array.length/2);
  let middle = Math.round(start + (end - start) / 2);
  if (
    target === array[start] ||
    target === array[middle] ||
    target === array[end]
  ) {
    return true;
  } else {
    //we check if array length is > 1
    //if it is, we keep splitting
    if (end > start) {
      if (target > array[middle]) {
        start = middle;
      } else {
        end = middle;
      }
      //array = array.slice(start, end);
      return binarySearch(array, target, start, end);
    }
    //else we return false:
    else return false;
  }
};

// const binarySearch = (array, target) => {
//     let start = 0;
//     let end = array.length-1;
//     let middle = Math.round(array.length/2);
//     if (target === array[start] || target === array[middle] || target === array[end]) {
//         return true
//     }
//     else {
//         //we check if array length is > 1
//                     //if it is, we keep splitting
//         if (end > start) {
//             if (target > array[middle]) {
//                 start = middle;
//             }
//             else {
//                 end = middle;
//             }
//             array = array.slice(start, end);
//             return binarySearch(array, target);
//         }
//         //else we return false:
//         else return false;
//     }
// };

const test1 = [1, 3, 4, 5, 10, 15, 20, 22, 23, 98, 1000];
console.log(binarySearch(test1, 10));

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
