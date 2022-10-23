## Hash Tables in Python

### Hash Table Fundamentals
- Key-Value pairs.
- A *hash-function* or hash method is required. _Where you pass the key to the function, which yields the address for the associated key's value._
- The hash-function or hashing method is **one-way** .. Meaning you can't pass the value to the function in an attempt to yield the key.
- The hashing function is also **deterministic**.. Meaning every time you put a particular key in, the same value address will be yielded.

#### Dictionaries
- Probably first hash-table structure to come to mind in python.

#### Our Hash Table
- We'll implement our own construct in the associated script.
- We'll use a 2D-like *list* structure to implement. This will allow us to use the lists' index as an addressing mechanism
- Will be using our earlier linked-lists to implement *serparate-chaining* to avoid collisions at same address space.