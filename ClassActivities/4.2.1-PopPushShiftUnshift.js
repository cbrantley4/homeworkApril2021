const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let dropItem = nums.pop();
console.log(dropItem);
let dropItem2 = nums.pop();
console.log(dropItem2);
console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable
let exItem = nums.shift();
console.log(exItem);
let exItem2 = nums.shift();
console.log(exItem2);
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(exItem2, exItem);
console.log(nums);
nums.unshift(dropItem, dropItem2);
console.log(nums);
