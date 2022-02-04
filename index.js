console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log("value");
const paragraph = document.querySelector(".park-display");
console.log(paragraph);
const allParagraphs = document.querySelectorAll("h2");
console.log(allParagraphs);
const buttons = document.querySelectorAll("button");
console.log(buttons);

const heading3List = document.querySelectorAll("h3");


for (let element of heading3List.values()) {
    console.log(element);
}

const dividersAll = document.querySelector("div.value");

for (let element of dividersAll.values()) {
    console.log(element);
}


/*
Do this
Select elements
For each of the elements described below, write a statement in the index.js file to find the element. To check that you found the right element, you may log the element that you find to the console.

Find an element with the class value.

Find a <button> element.

Find an element with the class area.

Find a <div> that is a descendant of an element with the class stat. (Hint: Look up descendant selectors in the documentation).

Find an element with the class hello. Take careful note of what is returned there.

Collections of elements with
*/