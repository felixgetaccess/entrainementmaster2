function calculerFactorielle(nombre) {
    if (nombre < 0) {
        return "La factorielle d'un nombre négatif n'est pas définie.";
    } else if (nombre === 0 || nombre === 1) {
        return 1;
    } else {
        let resultat = 1;
        for (let i = 2; i <= nombre; i++) {
            resultat *= i;
        }
        return resultat;
    }
}

let nombre = 5;
let factorielle = calculerFactorielle(nombre);
console.log(`La factorielle de ${nombre} est : ${factorielle}`);
