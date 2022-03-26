let invitati = ["carlo","rita","filippo","anacleto","riccardo","luca","francesco","silvia","sabrina","davide"];
let nomeInvitato = prompt("inserisci il tuo nome");
let trovato = false;
for(i= 0; i < invitati.length; i++ ){
    if(nomeInvitato.toUpperCase() == invitati[i].toUpperCase()){
      trovato = true;  
    }
}

if(trovato){
    alert("sei tra gli invitati");

}
else{
    alert("non sei tra gli invitati");
}