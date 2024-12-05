// Quotes
var Quote = [
  {
    Quote: "Be yourself; everyone else is already taken.",
    auther: " --Oscar Wilde",
  },
  {
    Quote: "So many books, so little time.",

    auther: " --Frank Zappa",
  },
  {
    Quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    auther: " --Albert Einstein",
  },
  {
    Quote: "A room without books is like a body without a soul.",
    auther: " --Marcus Tullius Cicero",
  },
  {
    Quote: "You only live once, but if you do it right, once is enough.",
    auther: "--Mae West",
  },
  {
    Quote: "Be the change that you wish to see in the world.",
    auther: " --Mahatma Gandhi",
  },
  {
    Quote: "If you tell the truth, you don't have to remember anything.",
    auther: " --Mark Twain",
  },
];
let last = -1;
function getQuote() {
  let num;

  do {
    num = Math.floor(Math.random() * Quote.length);
  } while (last === num);
  last = num;

  console.log(num);

  document.getElementById("quoteOutput").innerHTML = Quote[num].Quote;
  document.getElementById("authorOutput").innerHTML = Quote[num].auther;
}
document.getElementById("generateQuote").onclick = getQuote;
