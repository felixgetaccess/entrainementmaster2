function estNombrePremier(nombre) {
    if (nombre < 2) {
        return false;
    }
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 50; i++) {
    if (estNombrePremier(i)) {
        console.log(i);
    }
}
