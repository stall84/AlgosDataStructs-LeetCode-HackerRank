# Guess case for a recursive factorial algo

from types import NoneType


def factorial(n):
    # Step 1 - Validate input and edge-case safe
    # Here we use the assert keyword to softer-error with message to user if a negative or non-integer given
    assert n >= 0 and int(n) == n, 'Number must be a non-negative integer'
    # Step 2 - Next set your base or exit condition. Unfortunately for us, a lot of these require understanding of fundamentally mathematical concepts like these 2 examples
    # By mathematical definition 0! = 1
    if (n == 1 or n == 0):
        return 1
    else:
        # Step 3 - Narrow your problem space - Do the actual recursion
        # We obtained the expression below by analyzing the math behind what a factorial is. sIt's not super complex here, but clearly can be in algorithms that assume a deeper math understanding
        return n * factorial(n - 1)


print("factorial algo running: ", factorial(5))


# In the fibonaci algorithm below we're just asking what is the nTh (the input) element on the fibonaci sequence.
def fibonacci(n):
    # Step 1 - Validate input and edge-case safe
    assert n >= 0 and int(n) == n, 'Number must be a non-negative integer.'
    # Step 2 - Next set your base or exit condition. Unfortunately for us, a lot of these require understanding of fundamentally mathematical concepts like these 2 examples
    if (n == 0 or n == 1):
        return n
    else:
        # Step 3 - Narrow your problem space - Do the actual recursion
        return fibonacci(n-1) + fibonacci(n-2)


print("fibonacci algo running: ", fibonacci(4))


def digit_sum(n):
    assert n >= 0 and int(n) == n, 'Number must be a non-negative integer.'

    # Our base condition should handle when we finally get down to 0. In this case, simply return and the call stack should collapse back down accordingly
    if (n == 0):
        return 0
    else:
        # We have to force n to be an integer to remove any decimals
        return int(n % 10) + digit_sum(int(n // 10))


print("digit_sum algo running: ", digit_sum(112))


def powers(base, exponent):

    assert base and exponent >= 0 and int(base) == base and int(
        exponent) == exponent, 'Number must be a non-negative integer.'
    if (exponent == 0):
        return 1
    else:
        return base * powers(base, exponent - 1)


print("powers algo running: ", powers(2, 3))
