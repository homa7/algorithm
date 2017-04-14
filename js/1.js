// How would you verify a prime number?

function isPrime(n) {
    let divider = 2;
    while ( n > divider ) {
        if (n % divider === 0) {
            return false
        } else {
            divider++;
        }
    }
    return true;
}
console.log(isPrime(12));

// take 2
// a number cannot be divided by a number greater that half of it

function isPrime2(n) {
    let divider = 2;
    while ( n > divider && divider < n/2 ) {
        if(n%divider === 0) {
            return false;
        } else {
            divider++;
        }
    }
    return true;
}

console.log(isPrime2(20));
