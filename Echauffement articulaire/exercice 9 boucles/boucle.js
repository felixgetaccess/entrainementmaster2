function genererSuiteFibonacci(n) {
    let suite = [0, 1];

    for (let i = 2; i < n; i++) {
        let nouveauTerme = suite[i - 1] + suite[i - 2];
        suite.push(nouveauTerme);
    }

    return suite;
}

let n = 10;
let suiteFibonacci = genererSuiteFibonacci(n);

console.log(`Les ${n} premiers termes de la suite de Fibonacci sont :`);
console.log(suiteFibonacci.join(", "));
