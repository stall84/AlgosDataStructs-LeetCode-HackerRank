from pickle import TRUE


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self,  value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next

    def append(self, value):
        new_node = Node(value)
        # First test is the list empty
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        # Increment the length
        self.length += 1
        # Another method will call this method later. So it needs a boolean.
        return True

    def pop(self):
        # Code for 'edge' cases of an empty list and single node list
        if self.length == 0:
            return None
        temp = self.head
        prev = self.head
        while (temp.next):  # While next is not None (null)
            prev = temp
            temp = temp.next
        self.tail = prev
        self.tail.next = None
        self.length -= 1
        if self.length == 0:
            self.head = None
            self.tail = None
        return temp.value

    def prepend(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        self.length += 1
        return True

    def pop_first(self):
        # When list is empty (edge case 1)
        if self.length == 0:
            return None
        temp = self.head
        self.head = self.head.next
        temp.next = None  # I guess this makes sense..
        self.length -= 1
        if self.length == 0:
            self.tail = None
        return temp

    def get(self, index):       # A little surprising we're going to be passing the index we want to get instead of the Node value.. But should be simpler operation
        # Also note we're just observing or viewing the node we want to get .. we're not mutating the list by destructively returning the node.
        if index < 0 or index >= self.length:
            # This check will ensure that no negative index can be passed, and no index greater than the size of the list.
            return None
        else:
            temp = self.head
            # Convention holds if you are going to use the iterator variable in the loop (for instance print(i)). Then you'd use the
            # conventional 'i' variable (for i in range(whatever)). However here we're not using the iterator at all, so we
            # instead use an underscore for that iterator spot.
            for _ in range(index):
                temp = temp.next
            return temp


my_list_1 = LinkedList(4)
my_list_1.append(15)
my_list_1.append(23)

print('-'*40)
print('\n')
print('NODES:')
my_list_1.print_list()

print('\n')
print('my_list length: ', my_list_1.length)
print('\n')
print('-'*40)

my_list_1.prepend(100)

print('\n')
print('after prepend() length: ', my_list_1.length)
print('\n')
print('-'*40)

print('\n')
print('after prepend() NODES:')
my_list_1.print_list()

print('\n')
print('getting 2nd index node: ', my_list_1.get(2))

print('-'*40)
print('\n')
my_list_2 = LinkedList(1)
print(my_list_2.pop())
my_list_2.prepend(100)

print('-'*40)
print('\n')
print('length: ', my_list_2.length)

print('-'*40)
print('\n')
print('NODES:')
my_list_2.print_list()
print('\n')
print('popping_first :', my_list_2.pop_first())
print('\n')
print('length: ', my_list_2.length)
