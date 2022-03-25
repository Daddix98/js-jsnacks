let parolaUno = (prompt("inserisci prima parola"));
let parolaDue = (prompt("inserisci seconda parola"));

if (parolaUno.length > parolaDue.length){
    alert("la parola piu grande è" + parolaUno);
}else if (parolaUno.length < parolaDue.length){
    alert("la parola piu grande è" + parolaDue);
}else{
    alert("le parole hanno la stessa lunghezza");
}






