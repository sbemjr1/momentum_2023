const quotes = [
  {
    quote: "If you don't risk anything you risk even more.",
    autor: "Erica Jong",
  },
  {
    quote: "Life is a risk.",
    autor: "Diane Frolov",
  },
  {
    quote: "One must desire something to be alive.",
    autor: "Margaret Deland",
  },
  {
    quote: "He who laughs, lasts!",
    autor: "Mary Pettibone Poole",
  },
  {
    quote: "Hope is a waking dream.",
    autor: "Aristotle",
  },
  {
    quote: "Laughter is by definition healthy.",
    autor: "Doris Lessing",
  },
  {
    quote: "Early morning hath gold in its mouth.",
    autor: "Benjamin Franklin",
  },
  {
    quote: "Punctuality is the soul of business.",
    autor: "Thomas Halyburton",
  },
  {
    quote: "Time is an illusion. Lunchtime doubly so.",
    autor: "Douglas Adams",
  },
  {
    quote: "The future will be better tomorrow.",
    autor: "Dan Quayle",
  },
];

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
autor.innerText = todaysQuote.autor;
