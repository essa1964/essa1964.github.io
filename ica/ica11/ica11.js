const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);
const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', showAnswer)

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote() {
    //console.log("it works!")
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText); //check if error
        }
        const json = await response.json();
        // console.log(json.question);
        // console.log(json.answer);
        displayQuote(json.question); //we call the function we defined below to get this to display new questions
        showAnswer(json.answer); //buggy
    }
    catch (err) { //creates error log. if the try doesn't work, notify us of the error
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text'); //we want to select a part of our html document, that's what query selector does
    quoteText.textContent = quote; //whatever content is inside our variable quoteText, replace it with our parameter quote
}

function showAnswer(answer) {
    const answerText = document.querySelector('#js-answer-text'); //we want to select a part of our html document, that's what query selector does
    answerText.textContent = answer; //whatever content is inside our variable quoteText, replace it with our parameter quote
}

getQuote(); //that way when we reload the page, the box isn't empty