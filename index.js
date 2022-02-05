console.log(document);
/*
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
*/

const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()){
    let content = desc.innerText;
    

     if (content.length > 250){
         content = content.slice(0, 250);
         content = content + '<a href="#">...</a>';
         }
        desc.innerHTML = content;
     }

     /*const ratings = document.querySelectorAll(".rating-display .value");*/

     const ratings = document.querySelectorAll(".rating-display .value");
     for (let rating of ratings) {
         let ratingValue = parseFloat(rating.innerText);
        
         if(ratingValue > 4.7){
             rating.style.fontWeight = "bold";
             rating.style.color = "#3ba17c";
             rating.classList.add('high-rating');
             rating.classList.remove("value");

         }
     }

     const parks = document.querySelectorAll(".park-display");
     const numberParks = parks.length;

     const newElement = document.createElement("div");

     newElement.innerText = `${numberParks} exciting parks to visit`;
     newElement.classList.add("header-statement");

     const header = document.querySelector("header");
     header.appendChild(newElement);
     const main = document.querySelector("main");
     const park = main.querySelector('.park-display'){
         

       //remove park
         main.removeChild(park);
     }






