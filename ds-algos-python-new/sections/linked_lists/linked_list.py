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


my_list_1 = LinkedList(4)
my_list_1.append(15)
my_list_1.append(22)

my_list_1.print_list()
