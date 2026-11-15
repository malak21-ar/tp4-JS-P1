"use strict";
function f1() {
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"]; 
  for (const e of etudiants) {    //boucle pour parcurire le tableau                            
    console.log(e);
  }
}
function f2() {
  const etudiant = { nom: "John", prenom: "DOE", age: 30 };  
  console.log(etudiant);
}
function f3() {
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];
  for (const e of etudiants) { //boucle pour parcurire le tableau 
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  }
}