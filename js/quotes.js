const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

async function getQuote() {
  try {

    const res = await fetch("https://dummyjson.com/quotes/random");

    if (!res.ok) {
      throw new Error("API error");
    }

    const data = await res.json();

    quoteText.innerText = `"${data.quote}"`;
    authorText.innerText = "- " + data.author;

  } catch (error) {

    quoteText.innerText = "Failed to fetch quote. Try again.";
    authorText.innerText = "";

    console.error(error);
  }
}

document.getElementById("newQuote").addEventListener("click", getQuote);

document.getElementById("copyQuote").addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

getQuote();