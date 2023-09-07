function calculerSommeTableau(tableau) {
    let somme = 0;

    for(let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme;
}
let tableau = [10, 20, 30, 40, 50];
let resultat = calculerSommeTableau(tableau);
console.log("Résultat de la somme :", resultat);
