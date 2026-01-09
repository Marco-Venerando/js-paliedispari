// Chiedi all'utente una parola
let parola = prompt("Inserisci una parola");

// Funzione che verifica se una parola è palindroma
function isPalindroma(testo) {
  // Rendo la parola tutta minuscola
  testo = testo.toLowerCase();

  // Inverto la parola
  let parolaInvertita = testo.split("").reverse().join("");

  // Confronto
  return testo === parolaInvertita;
}

// Risultato
if (isPalindroma(parola)) {
  alert("La parola è palindroma");
} else {
  alert("La parola NON è palindroma");
}

// pari e dispari
let userChoice = prompt("inserisci pari o dispari").toLocaleLowerCase();
let UserNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(UserNumber);

// funzione per generare un numero casuale
function generaNumeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
}

const computerNumber = generaNumeroRandom();
console.log(computerNumber);

// generare un numero casuale senza la funzione

// const computerNumber = Math.floor(Math.random() * 5) + 1;
// console.log(computerNumber);

// faccio la somma

let somma = UserNumber + computerNumber;
console.log(somma);

function isPari(numero) {
  return numero % 2 === 0;
}

let risultato = isPari(somma) ? "pari" : "dispari";
console.log("Risultato:", risultato);

// risultato

if (userChoice === risultato) {
  alert("Ha vinto l'UTENTE");
  console.log("Ha vinto l'UTENTE!");
} else {
  alert("Ha vinto il COMPUTER");
  console.log("Ha vinto il COMPUTER!");
}
