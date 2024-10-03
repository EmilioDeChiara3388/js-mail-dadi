//console.log("Funzioni?");

// Preparazione
/* Stabilire due variabili alle quali assegnare due numeri casuali da 1 a 6;
Trovare il modo per stabilire quale dei due numeri casuali sia il maggiore;
Dare come vincitore il giocatore (utente o pc) che ha ottenuto il numero più grande */

let playerNumber = Math.floor(Math.random() * 6) + 1;
let botNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber);
console.log(botNumber);

if (playerNumber > botNumber){
    console.log("L'utente vince!");   
} else if (playerNumber < botNumber){
    console.log("Il pc vince!");
} else{
    console.log("Pareggio!");
}


