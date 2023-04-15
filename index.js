//  Grab the DOM Elements
const divContainer = document.querySelector(".container");
const h1 = document.querySelector("h1");
const divJoke = document.querySelector(".joke");
const button = document.getElementById("joke-btn");

//  Create a function to fetch the joke

async function getQuotes() {
  const apiUrl = "https://api.chucknorris.io/jokes/random";
  try {
    const response = await fetch(apiUrl); // Get data from API
    apiQuotes = await response.json(); // Convert response to JSON
    newQuote();
  } catch (error) {
    alert(error);
  }
}

function newQuote() {
  const quote = apiQuotes.value;
  //   We have to set the divs innerHtml to the text of the random quote
  divJoke.textContent = quote;
}

// On click of the button we generate a newQuote
button.addEventListener("click", getQuotes);

getQuotes();
