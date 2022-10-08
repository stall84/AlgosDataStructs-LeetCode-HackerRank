## Searching Algorithms Implemented in Javascript 
- [Link to slides](https://cs.slides.com/colt_steele/tries-21)

### Linear Search
- The simplest and most straightforward way of searching for the existence of an element in an array (or any datastructure or primitive for that matter) is a linear search.
- Literally looking at each element, one by one, for the target element. In some cases this is often the only (therefore the best/most efficient) method to use. (i.e. when no sorting available)
- Linear Search is used _under the hood_ by Javascript for the following methods: **indexOf(), includes(), find(), findIndex()**

### Binary Search
- Usually an order of magnitude faster form of searching 
- Rather than eliminating _one element_ at a time, you eliminate _half the elements_ at a time.
- **Will only work on a sorted dataset**
- Pseudocode:
```
// PSEUDOCODE
if (arr[mean/middle] === target) return arr[mean/middle]
else if (target > arr[mean/middle]) return search(right)
else if (targget < arr[mean/middle]) return search(left)
return -1
```