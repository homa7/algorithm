// Find all prime factors of a number?

function primeFactors(n) {
    var factors = [];
    divider = 2;
    while (n > 2){
        if(n % divider === 0){
           factors.push(divider);
           n = n/divider;
        } else {
           divider++;
        }
    }
    return factors;
}

console.log(primeFactors(100));
