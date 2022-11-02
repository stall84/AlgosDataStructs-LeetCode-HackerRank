## Hash Tables in Javascript

### Basics
- Key value pair structures
- Similar to arrays, but the keys are not required to be numeric (as they are in the array) or ordered (as they are in the array)
- Unlike array's hash tables are really fast comparatively for all operations.
- Utilizes a hashing function and must account for collisions.

### Language-specific Hash-Map-like structures
- Python uses what they call _Dictionaries_
- JS has _Objects_ (which are limited to string-type keys, but are eseentially a hash map). And _Maps_ which can have any value as it's key, remembers insertion order and only has unique keys. [Check this out for comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- Java, Go, Scala have traditional _Maps_

### This course's implementation 
- We'll consider a problem where we have a list of hex-code's and we want to organize them into a datastructure where we can store them by their english-name color.

#### Hash Function Basics
- To make our hash function _deterministic_, we will want to devise a way to guarantee an input always yields a particular output. 
- For our implementation, and others I've seen where a _hash table_ is constructed, the hashing function will be expected to take in the key (in our case a string), _and_ the size of the list or array structure that is being used to store the key-value pairs. e.g. ```hashFunc('word to hash', 31) // note we use a prime number as the size of our internal list/array```
- See the following resources which show how using _prime numbers_ in the function, and the size of the storing-structure, lead to far less key-collisions. 
- [Quora - Prime Number List/Array In Performant Hash Tables](https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why)
- [Blog - Why Do Hash Functions Use Prime Numbers](https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/)