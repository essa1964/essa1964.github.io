const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);
const imgButton = document.querySelector("#js-new-trump");
imgButton.addEventListener('click', getTrump)

const endpoint = "https://api.kanye.rest/";
const endpoint2 = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText); //check if error
        }
        const json = await response.json();
        // console.log(json.question);
        // console.log(json.answer);
        displayQuote(json.quote + " - Kanye"); //we call the function we defined below to get this to display new questions

    }
    catch (err) { //creates error log. if the try doesn't work, notify us of the error
        console.log(err);
        alert('Failed to fetch new quote');
    }
}
async function getTrump() {
    try {
        const response = await fetch(endpoint2);
        if (!response.ok) {
            throw Error(response.statusText); //check if error
        }
        const json = await response.json();
        // console.log(json.question);
        // console.log(json.answer);
        displayQuote(json.message + " - Trump"); //we call the function we defined below to get this to display new questions

    }
    catch (err) { //creates error log. if the try doesn't work, notify us of the error
        console.log(err);
        alert('Failed to fetch new image');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text'); //we want to select a part of our html document, that's what query selector does
    quoteText.textContent = quote; //whatever content is inside our variable quoteText, replace it with our parameter quote
}

getQuote(); //that way when we reload the page, the box isn't empty