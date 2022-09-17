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
        pre = self.head
        while (temp.next):  # While next is not None (null)
            pre = temp
            temp = temp.next
        self.tail = pre
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


my_list_1 = LinkedList(4)
my_list_1.append(15)


my_list_1.print_list()

print(my_list_1.pop())
print(my_list_1.pop())

print(my_list_1.length)
