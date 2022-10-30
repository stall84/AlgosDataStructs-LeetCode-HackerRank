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