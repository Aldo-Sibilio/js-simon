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

// countdown
let tempo = 30;

countdown.innerHTML = tempo;

const timer = setInterval(function(){

  tempo--;

  countdown.innerHTML = tempo;

  if(tempo === 0){

    clearInterval(timer);

    // nascondo numeri
    numbersList.classList.add("d-none");

    // mostro form
    form.classList.remove("d-none");

    countdown.innerHTML = "Inserisci i numeri";

  }

}, 1000);

// submit form
form.addEventListener("submit", function(event){

  event.preventDefault();

  const numeriUtente = [];

  // prendo numeri input
  for (let i = 0; i < inputs.length; i++) {

    numeriUtente.push(parseInt(inputs[i].value));

  }

  console.log(numeriUtente);


  // confronto numeri
  const numeriIndovinati = [];

  for (let i = 0; i < numeriUtente.length; i++) {

    if (numeriRandom.includes(numeriUtente[i])) {

      numeriIndovinati.push(numeriUtente[i]);

    }

  }

  // risultato
  message.innerHTML = `
  Hai indovinato ${numeriIndovinati.length} numeri: 
  ${numeriIndovinati}
  `;

});

