const quotes = [
  {
    quote: `"The study of History is the beginning of wisdom."`,
    writer: `Jean Bodin`,
    category: "Life"
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `Albert Einstein`,
    category: "Science"
  },
  {
    quote: `"History will be kind to me for I intend to write it."`,
    writer: `Winston Churchill`,
    category: "History"
  },
  {
    quote: `"To love someone is nothing, to be loved by someone is something, to love someone who loves you is everything."`,
    writer: `Bill Russell`,
    category: "Love"
  },
  {
    quote: `"The happiness of your life depends upon the quality of your thoughts."`,
    writer: `Marcus Aurelius`,
    category: "Life"
  },
  {
    quote: `"One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life."`,
    writer: `Khalil Gibran`,
    category: "Love"
  }
];

const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const categoryEl = document.querySelector(".quote-category");
const btn = document.querySelector(".btn");
const radios = document.querySelectorAll('input[name="cat"]');

function displayQuote(category) {
  let filtered;
  if (category === "Random") {
    filtered = quotes; 
  } else {
    filtered = quotes.filter(q => q.category === category);
  }

  if (filtered.length === 0) {
    quoteEl.innerHTML = "No quotes found.";
    authorEl.innerHTML = "";
    categoryEl.innerHTML = "";
    return;
  }

  const random = Math.floor(Math.random() * filtered.length);
  const selected = filtered[random];

  quoteEl.innerHTML = selected.quote;
  authorEl.innerHTML = `– ${selected.writer}`;
  categoryEl.innerHTML = `Category: ${selected.category}`;
}

const initialSelected = document.querySelector('input[name="cat"]:checked');
if (initialSelected) {
  displayQuote(initialSelected.value);
}

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    displayQuote(radio.value);
  });
});

btn.addEventListener("click", () => {
  const selectedRadio = document.querySelector('input[name="cat"]:checked');
  if (selectedRadio) {
    displayQuote(selectedRadio.value);
  }
});
