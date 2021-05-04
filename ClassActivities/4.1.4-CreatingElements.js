// create a new unordered list (ul) element
const newUnorderedList = document.createElement("ul");
document.querySelector("p").appendChild(newUnorderedList);
// remove the paragraph element in the nav-bar
let paragraphElement = document.querySelector(".nav-bar").children;
document.querySelector(".nav-bar").remove(paragraphElement);
// add your new ul element to the nav-bar

// create two new list item (li) elements, and add some text to them
const listItem = document.createElement("li");
const listItem2 = document.createElement("li");
listItem.textContent = "Yay!!";
listItem2.textContent = "Hoorah";
document.querySelector(".nav-bar > ul").appendChild(listItem);
document.querySelector(".nav-bar > ul");
document.querySelector(".nav-bar");
document.querySelector(".nav-bar").appendChild(listItem);
document.querySelector(".nav-bar").appendChild(listItem2);
// add the li elements to the ul in the nav-bar
