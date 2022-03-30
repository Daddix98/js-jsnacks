//creo un prompt da dove l'utente inserirà il numero che successivamente calcoleremo al cubo.

let nUtente = prompt("inserisci un numero"); 

//creo una variabile che richiama la funzione "CUBO" da cui ricavare il risultato del calcolo. 

let risultato = (cubo(nUtente));

//creo la funzione che calcola il numero (n) elevato al cubo dove (n) corrisponde al valore che l'utente ha inserito.

function cubo(){
  
    let calcoloAlCubo = nUtente * nUtente * nUtente;
    if(nUtente = calcoloAlCubo){
    alert("il risultato è " + (calcoloAlCubo));
    }
     
    

    
}
 


    












  