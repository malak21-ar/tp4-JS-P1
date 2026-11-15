"use strict";
const Students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     x: 14, y: 5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", x: 7,  y: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   x: 13, y: 3 }
];
function Moyenne(nombre) {  //fonction qui verifier si la moyenne et inf ou sup de 10
  if (nombre >= 10) {
    return true;     
  } else {
    return false;    
  }
}
function f() {
  for (const s of Students) {          
    const total = s.x + s.y;        //on recupere x et y quand on parcure le tableau et on calcule leur totale
    const reponse = Moyenne(total);         //verification si < ou > de 10

    if (reponse === true) {   //affichage du message
      console.log(s.id + ": ADMIS");
    } else {
      console.log(s.id + ": AJOURNÉ");
  }
}
}