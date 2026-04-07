// numeri random
const numbersList = document.querySelector("#numbers-list");
const countdown = document.querySelector("#countdown");
const form = document.querySelector("#answers-form");
const inputs = document.querySelectorAll("input");
const message = document.querySelector("#message");

// array numeri casuali
const numeriRandom = [];

// genero 5 numeri casuali
for (let i = 0; i < 5; i++) {

  const numero = Math.floor(Math.random() * 50) + 1;

  numeriRandom.push(numero);

  numbersList.innerHTML += `<li>${numero}</li>`;
}

console.log(numeriRandom);