const quotes = [
  {
    text: "Believe you can and you're halfway there. – Theodore Roosevelt",
    image: "https://source.unsplash.com/1600x900/?mountain,sky"
  },
  {
    text: "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    image: "https://source.unsplash.com/1600x900/?motivation,road"
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    image: "https://source.unsplash.com/1600x900/?clock,time"
  },
  {
    text: "Dream big and dare to fail. – Norman Vaughan",
    image: "https://source.unsplash.com/1600x900/?dream,stars"
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    image: "https://source.unsplash.com/1600x900/?sun,sunshine"
  }
];

const quoteText = document.getElementById("quote-text");
const nextBtn = document.getElementById("next-quote-btn");
const body = document.body;

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  quoteText.classList.remove("fade-in");
  void quoteText.offsetWidth;

  quoteText.textContent = selectedQuote.text;
  quoteText.classList.add("fade-in");

  // Update background image
  body.style.backgroundImage = `url('${selectedQuote.image}')`;
}

nextBtn.addEventListener("click", showRandomQuote);
showRandomQuote(); // initial
