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


print(factorial(5))


# In the fibonaci algorithm below we're just asking what is the nTh (the input) element on the fibonaci sequence.
def fibonaci(n):
    # Step 1 - Validate input and edge-case safe
    assert n >= 0 and int(n) == n, 'Number must be a non-negative integer.'
    # Step 2 - Next set your base or exit condition. Unfortunately for us, a lot of these require understanding of fundamentally mathematical concepts like these 2 examples
    if (n == 0 or n == 1):
        return n
    else:
        # Step 3 - Narrow your problem space - Do the actual recursion
        return fibonaci(n-1) + fibonaci(n-2)


print(fibonaci(4))
