class Rectangle {
    constructor(longueur, largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }

    calculerSurface() {
        return this.longueur * this.largeur;
    }
}
let monRectangle = new Rectangle(5, 10);
let surface = monRectangle.calculerSurface();

console.log("Longueur :", monRectangle.longueur);
console.log("Largeur :", monRectangle.largeur);
console.log("Surface du rectangle :", surface);
