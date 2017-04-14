# Find all prime factors of a number?

def primeFactors(n):
    factors = []
    divider = 2
    while n > 2:
        if n%divider == 0:
            factors.append(divider)
            n = n / divider
        else:
            divider+=1
    return factors

n = int(input('enter a integer number:'))
print(primeFactors(n))
