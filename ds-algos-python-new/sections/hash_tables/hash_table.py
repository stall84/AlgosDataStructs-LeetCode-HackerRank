

class Hash_Table:

    counter = 0


    def __init__(self, size = 7) -> None:       # We'll default our main list to prime number 7
        self.data_map = [None] * size           # Create an empty list of your specified size

    def __hash(self, key):                           # We 'dunder'(__) the hash method to make it private
        local_hash = 0
        for char in key:
            local_hash = (local_hash + ord(char) * 23) % len(self.data_map)
            # Similar to how we constructed hash in javascript: Utilize a prime number (23) to multiply
            # the output of the ASCII function 'ord()' (ordinal-func) on each letter of the input string (key).
            # Then modulo that by the (prime by default) length of our address-space (list)
        return local_hash
    
    def print_table(self):
        for i, val in enumerate(self.data_map):
            print(i, ": ", val)

    def set_pair(self, key_value):
        hashed = self.__hash(key_value[0])
        if hashed:
            # First lets create the 'chained' in inner-array for the index if not already created
            if not self.data_map[hashed]:
                # Create the inner array and initialize with the current key_value
                # User a tuple as the inner wrapper type
                self.data_map[hashed] = [(key_value[0], key_value[1])]
                return True
            else:
                self.data_map[hashed].append((key_value[0], key_value[1]))
                return True

        else:
            return False

    def get_value(self, key):
        hashed = self.__hash(key)
        if hashed:
            if self.data_map[hashed]:
                for ele in self.data_map[hashed]:
                    if ele[0] == key:
                        print('getting: ', ele ) 
                        return self.data_map[hashed]
                    else:
                        return False
            else:
                return False
        else:
            return False


new_hash = Hash_Table()
new_hash.print_table()
print('-'*30)
new_hash.set_pair(['apple', 'gorgonzola'])
new_hash.set_pair(['bacon', 'mozerella'])
new_hash.print_table()
print('-'*30)
new_hash.set_pair(['peach', 'grunion'])
new_hash.set_pair(['butter', 'humboldt'])
new_hash.print_table()
# new_hash.get_value('peach')
print(new_hash.get_value('peach'))