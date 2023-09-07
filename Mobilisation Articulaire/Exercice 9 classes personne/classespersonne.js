class Personne {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Nom : ${this.nom}, Prénom : ${this.prenom}, Âge : ${this.age}`);
    }
}
let personne1 = new Personne("Dupont", "Jean", 30);
let personne2 = new Personne("Martin", "Marie", 25);

personne1.afficherDetails();
personne2.afficherDetails();
