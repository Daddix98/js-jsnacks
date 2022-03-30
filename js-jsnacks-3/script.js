// Chiedere all'utente 10 numeri e sommarli.

let somma = 0;
let n;

for (var i = 0; i < 10; i++){
  n = parseInt(prompt('Inserisci un numero '));
  if (n > 0){
    somma += n;
  }
}

alert(somma);


