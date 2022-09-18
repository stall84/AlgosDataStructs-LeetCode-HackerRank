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
