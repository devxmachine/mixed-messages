const banners = document.getElementById("carousel");

function engagePointer(event) {
  event.target.style.cursor = "pointer";
}

   banners.addEventListener('mouseover', engagePointer);

function pushDown(event) {
   event.target.style.boxShadow = " 0 0";
}
function pushUp(event) {
   event.target.style.boxShadow = " 2px 5px";
 }


   banners.addEventListener('mousedown', pushDown);
   banners.addEventListener('mouseup', pushUp);


const quoteOne = "Embrace the glitch: let the imperfections guide your creation";
const quoteTwo = "Inject randomness: allow chance to sculpt your next move";
const quoteThree =  "Seek inspiration from the mundane: find beauty in the ordinary";
const quoteFour = "Embrace limitations: they can spark unexpected creativity";
const quoteFive = "Explore the edge of chaos: where order meets spontaneity";
const quoteSix = "Shift perspectives: see through the eyes of another";
const quoteSeven = "Embrace the unexpected: let surprises shape your journey";
const quoteEight = "Emphasize the process over the outcome: the journey is the destination";
const quoteNine = "Dare to fail spectacularly: it's a pathway to innovation";
const quoteTen = "Merge opposites: where contradiction breeds invention";



function getNewQuote(){
let randNum = Math.floor(Math.random() * 10);
const messageArray = [quoteOne, quoteTwo, quoteThree, quoteFour, quoteFive, quoteSix, quoteSeven, quoteEight, quoteNine, quoteTen];
let randomMessage = messageArray[randNum];
console.log(randomMessage);
banners.innerHTML = randomMessage;
}

banners.addEventListener('click', getNewQuote);

