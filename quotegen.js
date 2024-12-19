// Get the quote display element and the button
const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generateButton");

// Function to fetch a random quote from ZenQuotes API
function fetchQuote() {
    fetch('https://zenquotes.io/api/random') // Using ZenQuotes API
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Display the quote
            quoteElement.textContent = `"${data[0].q}" — ${data[0].a}`;
        })
        .catch(error => {
            quoteElement.textContent = "Sorry, we couldn't fetch a quote at this moment.";
            console.error('Error fetching quote:', error); // Log the error for debugging
        });
}

// Initial quote load when the page loads
fetchQuote();

// Event listener for the button to generate a new quote
generateButton.addEventListener("click", fetchQuote);