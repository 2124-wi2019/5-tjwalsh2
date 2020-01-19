/* Tyler Walsh
walsh_ao5A.js
19WI_INFO_2124_WW
Thoendel
1/18/2019 */

const toDoList = []; //An array to keep track of my to-do-list. Created with an array literal.

toDoList[0] = "Buy Groceries"; //The first item on my to-do-list.
toDoList[1] = "Change Tire"; //The second item on my to-do-list.
toDoList[2] = "Vacuum"; //The third item on my to-do-list.
toDoList[3] = "Make Dinner"; //The fourth item on my to-do-list.
// console.log(toDoList); Outputs the list to check what order things are in. Exactly as listed above.

toDoList.unshift("Water Plants"); //Adds an item to the beginning of the list.
// console.log(toDoList); Outputs the list to check what order things are in. As above, but with "water plants" at the beginning.


toDoList.reverse(); //Reverses the order of the list.
toDoList.sort(); //Sorts the list. Since this list uses strings and no other method of sorting was input, it sorts alphabetically.

toDoList.includes("x"); //Checks if my to-do-list contains a lowercase 'x'.

// console.log(toDoList); Outputs the list to check what order things are in. Sorted alphabetically.

const groceryList = new Array(); //An array for my groceries using the array constructor.

groceryList[0] = "Cabbage"; //The first item in my grocery list.
groceryList[1] = "Carrots";
groceryList[2] = "Chicken";
groceryList[3] = "Clam";
groceryList[4] = "Corn";
groceryList[5] = "Cantaloupe"; //The 6th item in my grocery list.

// console.log(groceryList); Outputs the grocery list to check what order things are in.

groceryList.shift(); //Returns the first item of the grocery list, but removes it from the array.
// console.log(groceryList); Outputs the grocery list to check what order things are in.

groceryList.splice(3, 0, "Celery"); //Adds an item to the middle of the list. Ordinarily, this would replace an item, but by specifying that 0 items should be replaced, the method only adds one.
groceryList.splice(3, 0, "Chocolate"); 

// console.log(groceryList); Outputs the grocery list to check what order things are in.