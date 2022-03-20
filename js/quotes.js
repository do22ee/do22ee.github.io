const quotes = [
    {
        quote: "일찍 일어나는 <br> 새가 피곤하다",
        author: "박명수"
    },
    {
        quote: "즐길 수 없으면 <br> 피해라",
        author: "명수옹"
    },
    {
        quote: "맛있으면 0칼로리",
        author: "이영자"
    },
    {
        quote: "고양이는 신이 빚어낸 <br> 최고의 걸작품이다",
        author: "레오나르도 다빈치"
    }
];

const quote = document.querySelector("#random-quote div:first-child");
const author = document.querySelector("#random-quote div:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = `"${randomQuote.quote}"`;
author.innerHTML = randomQuote.author;
