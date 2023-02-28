"use strict";

const ul =document.getElementById("shopping-list");

const shoppingList = [
    "Pane",
    "Vino",
    "Latte",
    "Verdure"
]
    console.log(ul)

    /*VERSIONE COL FOR
    
    for(let i =0; i< shoppingList.length; i++){
        console.log(shoppingList[i]);
        const listItem = document.createElement('li');
        listItem.append(shoppingList[i]);
        ul.append(listItem);

    }*/

    /*VERSIONE CON WHILE*/

let i = 0;

while (i < shoppingList.length) {
    console.log(shoppingList[i]);
    

    const listItem = document.createElement('li');
    listItem.append(shoppingList[i]);
    ul.append(listItem);

    i++;
}
