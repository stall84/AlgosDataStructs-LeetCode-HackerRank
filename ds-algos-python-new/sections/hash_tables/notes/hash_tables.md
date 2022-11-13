## Hash Tables in Python

### Hash Table Fundamentals
- Key-Value pairs.
- A *hash-function* or hash method is required. _Where you pass the key to the function, which yields the address for the associated key's value._
- The hash-function or hashing method is **one-way** .. Meaning you can't pass the value to the function in an attempt to yield the key.
- The hashing function is also **deterministic**.. Meaning every time you put a particular key in, the same value address will be yielded.

#### Dictionaries
- Probably first hash-table structure to come to mind in python.

#### Collision Methodology      
- _*Separate Chaining*_ : Utilizing a 2nd data structure within the address space (The list or array used for internally storing _addressing_ hashed key's and their values). So for instance if your hash function yields an address of _index_ 3, and there already exists a key-value pair stored at index 3, you create a 2nd list within index 3 to hold the now _2_ elements present there. 
``` internal_address_list = [ [], [], [('whatever', 4), ('stuff', 22), [('another', 292), ('yet_another', 143)], ...] ```
- Notice we will likely use *tuples* when in python.. but the nested structure could be anything.. an array, another list, etc.
- _*Linear Probing*_ (part of methodology called _'Open Addressing'_): This is essentially a _*look-ahead*_ method.. You _probe_ ahead (or behind) for an empty, unoccupied address spot. This has the upside of assuring only one address location is occupied, but the obvious drawback of being address-location intensive (you will need a lot of spots)

#### Our Hash Table
- We'll implement our own construct in the associated script.
- We'll use a 2D-like *list* structure to implement. This will allow us to use the lists' index as an addressing mechanism
- Will be using our earlier linked-lists to implement *serparate-chaining* to avoid collisions at same address space.
- Notably (_differing from my javascript hash-table implementation also in this file_), we will utilize the _*linked-list*_ structure we created earlier to provide the 2nd/embedded datastruct for holding collided hashes
