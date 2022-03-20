const images = ["paper.jpg", "papers.jpg", "sand.jpg"];
const full = document.querySelector(".full");
const body = document.querySelector("body");

const randomImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `image/${randomImg}`;
document.body.append(bgImg);







