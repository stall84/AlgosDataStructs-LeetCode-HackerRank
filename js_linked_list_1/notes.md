## Linked Lists (Singly)

### Basics
- Whereas an array (for contrast) is a collection of elements (_nodes_) that are contiguous in memory, and which are thus accessible by an index like ```array[1] // 2nd element```, a **linked_list** is a collection of elements that are only _linked_ by a **next** pointer to the next element, no ability to retrieve elements by their index or position exists __aside from starting at the first element each time and then going to next, then to next, etc until the element you want is reached__ 
- Linked lists fundamentally must have a **HEAD** element and **TAIL** element. To mark the beginning and ending nodes
- _Singly_ linked lists indicate only a single direction from node to node (usually forward/next from HEAD) .. A _doubly_ linked list would have bi-directional connections between nodes (which would make something like traversing by starting at TAIL and working backwards more efficient, but involves tradeoffs of it's own, discussed later).
- Efficient operations include **_Inserting_** and **_Deleting_** especially as relates to inserting at the beginning of the List, wheras an array would be required to shift every element/node in a beginning insert.
