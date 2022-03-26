let numeriDispari = [];

for(i = 0; i < 6; i++){
    let numero = prompt("inserisci un numero");
    if((numero % 2) != 0){
        numeriDispari.push(numero);
    }
}

alert("questi sono i tuoi numeri dispari " + numeriDispari);

