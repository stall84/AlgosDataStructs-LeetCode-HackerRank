# Big O Space and Time Complexity 'Cost' of Algorithm Runs

## Three Letters Involved

- **Omega** **Omicron** and **Theta**

- Omicron is the 'Big O'
-
-

### Example: A 7 number list <font size="5">**[1,2,3,4,5,6,7]**</font>

- Your __best case__ scenario would be finding the number '1' .. It would take _1 operation_. -> **Omega**
- Your __worst case__ scenario would be finding the number '7' .. It would take _7 operations_ in an iterative algorithm. -> **Omicron**
- Your __average case__ scenario would likewise be finding the number '4'. -> **Theta**
- So technically speaking.. Anytime you're speaking of 'Big O'.. You're describing the _worst case_.

### O(n) 
- The most common representation of an O(n) algorithm is a function using only a for-loop to do it's work. The input will be equivalent to the number of operations performed.
```
def looper(n):
    for num of n:
        print(num)

looper(10)  # Runs same number of times as input - 10
```
- With any of these notations you can (and should) **drop the constant** 
- For our example above if we added a 2nd for-loop in the main function scope (not nested, just a 2nd below the first), you technically then have a complexity of O(2n) .. but that constant 2 can be dropped.. so it's still just O(n)

### O(n<sup>2</sup>) 
- For every operations, another operation must occurr .. In the easiest example: A nested for-loop

```
def looper_nested(n):
    for num in range(n):
        for new_num in range(n)
            print(num, new_num)

looper_nested(10)  # Runs the square of operations of input - 100 times
```
- Like we dropped the constant to _simplify_ in O(n). Here to lets say we had a 3rd nested loop.. Instead of writing O(n<sup>3</sup>), instead we **only write O(n<sup>2</sup>)** to simplify.
