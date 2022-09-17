# Linked List Notes
<br/>
<hr/>

### Fundamentals
<hr/>

- Unlike conventional array's where each element is stored side-by-side to it's neighbors in memory, Linked Lists can have nodes fragmented all over the memory space.

- The first node in a linked list is called the *HEAD*

- Each node has a *NEXT* property which is it's _pointer_

- The last node in a LL points to *NONE*

- Almost all operations on an LL will consume O(n) time.. However prepending (adding to the front) can happen in O(1). See [the pdf](ll-1.pdf) in the notes.

### Conceptual Structure of the Linked List
<hr/>

- Strange to grasp for me at first, but when we're designing the classes for these, this becomes more apparent... But instead of thinking of the linked list as separate nodes (_they are, but this is a thought exercise_).. Think of the *next* 'property' on each node as holding the whole next node. This is kind of similar to a tree structure.. or a russian-doll 

- Consider a Linked list like the following: <span style="font-size: 20px; color: red;">[11, 3, 23]

- The above could instead be written using _python dicts_ (like js objects). but would look like:
```
head: {
    "value": 11,
    "next": {
        "value: 3,
        "next": {
            "value": 23,
            "next": None
        }
    }
}
```
- Notice again how the next pointer essentially _is_ the next node. or None if one doesn't exist (which would become the tail)


### Notes: 
<hr/>

- Using OOP to create our Linked List and Nodes in the [exercises](linked_list.py) really enabled conceiving of the Linked List as a separate entity than it's nodes.. This helps in viewing the *HEAD* and *TAIL* properties (that we use to manipulate the list) as their own kind of property-pointers that can be used to make changes to the Linked List by manipulation of the nodes.

