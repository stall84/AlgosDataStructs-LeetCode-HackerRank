# Guess case for a recursive factorial algo

from types import NoneType


def factorial(n):
    # Always 1st aim to set your base or exit condition. Assuming you dont need to do any input validation before.
    if (n == 1 or n == 0):
        return 1
    else:
        return n * factorial(n - 1)


print(factorial(4))


# In the fibonaci algorithm below we're just asking what is the nTh (the input) element on the fibonaci sequence.
def fibonaci(n):
    if (n == 0 or n == 1):
        return n
    else:
        return fibonaci(n-1) + fibonaci(n-2)


print(fibonaci(4))
