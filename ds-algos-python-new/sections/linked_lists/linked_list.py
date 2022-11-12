

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self,  value: int):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next

    def append(self, value: int):
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

    def prepend(self, value: int):
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

    def get(self, index: int):       # Pass the index you want to get.
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
    # set_value could also be called 'modify()' or 'edit_node()' ..
    # The next method insert() will actually go about creating a brand new node and resetting pointers

    def set_value(self, index: int, value: int):
        # For setting a value let's utilize the previously created get method to establish our temp-node location
        temp = self.get(index)
        if temp:
            temp.value = value
            return True
        return False

    def insert(self, index: int, value: int):
        if index < 0 or index > self.length:
            return None
        # Use methods we already have for 1st and last element cases
        if index == 0:
            return self.prepend(value)
        if index == self.length:
            return self.append(value)

        # Get the leftmost of the neighbor nodes so you can point it's next to the node being inserted (would not work with rightmost neighbor)
        temp_left = self.get(index - 1)
        # temp_right = self.get(index)
        new_node = Node(value)
        # By just swap-algoing these you save a method call (from temp_right) and assignment
        new_node.next = temp_left.next
        temp_left.next = new_node
        self.length += 1
        return True

    def remove(self, index: int):
        # This is a great method for illustrating linked lists. Especially in the middle cases where you really
        # see how without a node and a 'valid' next pointer.. the List doesn't really mean or do anything.
        if index < 0 or index > self.length:
            return None
        if index == 0:
            return self.pop_first()
        if index == self.length - 1:
            return self.pop()
        else:
            prev = self.get(index-1)    # The get method is an O(n) method. To save on calculations after doing this once, we do 
            temp = prev.next            # This instead of another get method call for temp
            prev.next = temp.next       # This is the main swap, pointing the previous node to the one after the extracted one
            temp.next = None            # Separate the removed node permanently from the list
            self.length -= 1
            return temp                 # Return the whole node, not just it's value field

    def reverse(self):
        temp = self.head                # Lets first swap Head and Tail
        self.head = self.tail
        self.tail = temp
        after = temp.next               # We will need 2 more variables to create a 'sliding window' as we iterate through the list
        before = None                   # before will be None (null) to start
        for _ in range(self.length):    # Using an anonymous iterator (_). Loop through the list's nodes
            after = temp.next
            temp.next = before          # THis is the specific 'flipping' of the next pointer from what was 'right-facing' to now backwards 'left/reversed-facing'
            before = temp
            temp = after





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

my_list_1.print_list()
my_list_1.set_value(1, 5)
print('-'*40)
my_list_1.print_list()
print('-'*40)
my_list_1.insert(2, 9)
print('-'*40)
print('after insert')
my_list_1.print_list()
# map(lambda x: print(f'node: {x} -- next: {x.next} '), my_list_1)          # Our linked list isn't iterable .. thats why we created the print_list() method on it

print('-'*40)
my_list_1.remove(0)
my_list_1.print_list()
print('-'*40)
my_list_1.remove(3)
my_list_1.print_list()

print('-'*40)
my_list_1.append(199)
my_list_1.print_list()
my_list_1.reverse()
print('Reverse Finished...')
my_list_1.print_list()