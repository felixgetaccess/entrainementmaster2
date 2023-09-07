class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }

    calculerCirconference() {
        return 2 * Math.PI * this.rayon;
    }
}
let monCercle = new Cercle(5);
let circonference = monCercle.calculerCirconference();

console.log("Rayon du cercle :", monCercle.rayon);
console.log("Circonférence du cercle :", circonference);
