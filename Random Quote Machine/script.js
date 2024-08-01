const projectName = "random quote machine";

const colors = [
    '#EC7E7A', '#FAE690', '#40E0D0', '#95E1D3', '#008000', '#FF0008', '#0047AB' ,'#FFED10'
];

let quotesData = [];

async function getQuotes() {
    try {
        // Replace this URL with a proper quotes API
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        quotesData = data;
        return data;
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
}

function getRandomQuote() {
    return quotesData[Math.floor(Math.random() * quotesData.length)];
}

function getQuote() {
    let randomQuote = getRandomQuote();
    
    document.getElementById('quote').textContent = randomQuote.text;
    document.getElementById('author-name').textContent = randomQuote.author || "Unknown";
    
    document.getElementById('tweet-quote').href = 
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
        + encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author);

    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    document.body.style.color = color;
    document.querySelectorAll('.button').forEach(button => {
        button.style.backgroundColor = color;
    });
}

function initQuoteMachine() {
    document.getElementById("new-quote").addEventListener("click", getQuote);
    
    getQuotes().then(() => {
        getQuote();
    });
}

document.addEventListener("DOMContentLoaded", initQuoteMachine);