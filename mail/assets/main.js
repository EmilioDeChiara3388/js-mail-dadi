//console.log("Funzioni?");

//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//Preparazione
/* Creare un array con un elenco di email, che saranno la lista di chi può accedere;
Creare un prompt per ricevere l'email dell'utente;
Trovare il modo di confrontare la stringa inserita con gli elementi dell'array;
Fare un if block, che stampi i messaggi a seconda della corrispondenza o meno del dato inserito, in caso con un alert */

const mailList = [
    "rufy.monkeyd@mail.it",
    "zoro.roronoa@mail.it",
    "sanji.vinsmoke@mail.it",
    "nami.navigator@mail.it",
    "nico.robin@mail.it",
    "franky.cyborg@mail.it",
    "chopper.doctor@mail.it",
    "usopp.sniper@mail.it",
    "brooke.skeleton@mail.it",
    "jimbe.seaknight@mail.it"
];

let insertMail = prompt("Inserisci il tuo indirizzo email:");

if (!insertMail.includes("@")){
    console.log(insertMail);
    console.log("Non hai inserito un indirizzo email...");
    alert("Non hai inserito un indirizzo email...");
}
else if (mailList.includes(insertMail)){
    console.log(insertMail);
    console.log("Benvenuto " + insertMail + ", accesso autorizzato!");
    alert("Benvenuto " + insertMail + ", accesso autorizzato!");
} else {
    console.log(insertMail);
    console.log("Utente non autorizzato, accesso negato!");
    alert("Utente non autorizzato, accesso negato!");
}
