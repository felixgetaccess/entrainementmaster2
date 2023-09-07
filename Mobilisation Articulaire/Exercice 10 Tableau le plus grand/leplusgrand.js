function trouverPlusGrand(tableau) {
    let plusGrand = tableau[0];

    for(let i = 1; i < tableau.length; i++) {
        if (tableau[i] > plusGrand) {
            plusGrand = tableau[i];
        }
    }

    return plusGrand;
}
let tableau = [10, 5, 8, 15, 3, 20];
let plusGrandNombre = trouverPlusGrand(tableau);

console.log("Le plus grand nombre est :", plusGrandNombre);
