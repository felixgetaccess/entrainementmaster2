function estPalindrome(chaine) {
    // Retirer les espaces et mettre tout en minuscules
    chaine = chaine.replace(/\s/g, "").toLowerCase();

    // Inverser la chaîne
    let chaineInverse = chaine.split("").reverse().join("");

    // Vérifier si la chaîne originale est égale à la chaîne inversée
    return chaine === chaineInverse;
}

let chaine = "Non félix";
let estUnPalindrome = estPalindrome(chaine);

console.log(`La phrase "${chaine}" est un palindrome : ${estUnPalindrome}`);
