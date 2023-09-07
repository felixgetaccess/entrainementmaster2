function verifierPairImpair(nombre) {
    if (nombre % 2 === 0) {
        return "Le nombre est pair.";
    } else {
        return "Le nombre est impair.";
    }
}

let resultat = verifierPairImpair(7);
let resultat2 = verifierPairImpair(8);
let resultat1 = verifierPairImpair(32213);
console.log(resultat);
console.log(resultat2);
console.log(resultat1);