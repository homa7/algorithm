# How would you verify a prime number


def isPrime(n):

    divide = 2
    while n > divide:
        if n % divide == 0:
            return False
        else:
            divide += 1

    return True

m = int(raw_input("Please enter an intiger number:"))

print(isPrime(m))
