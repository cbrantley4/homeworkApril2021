// create an Array using an Array literal
let stores = ["Target", "Ikea", "Costco", "Walmart", "Walgreens"];
// access the 1st item in the Array
console.log(stores[0]);
// access the last item in the Array
console.log(stores[4]);
// print the length of the Array
console.log(stores.length);
// use the length property to access the last item in the Array
console.log(stores[stores.length - 1]);
console.log(stores[4]);
// with for...of, loop over the Array, modify the value and add to a different Array
let items = [0, 1, 2, 3];
for (let item of items) {
  console.log(item + 1);
}
console.log(items);
