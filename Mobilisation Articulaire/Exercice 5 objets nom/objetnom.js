function afficherNomComplet(personne) {
    console.log("Nom complet :", personne.prenom + " " + personne.nom);
}
let personne = {
    prenom: "Jean",
    nom: "Dupont"
};

afficherNomComplet(personne);
