let numeroUno = (prompt("inserisci un numero"));
let numeroDue = (prompt("inserisci secondo numero"));

if (numeroUno > numeroDue){
    alert("Il numero maggiore è" + numeroUno);
}else if ( numeroDue > numeroUno){
    alert("il numero maggiore è" + numeroDue);
}else{
    alert("I numeri sono uguali");
}