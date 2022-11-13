

class Hash_Table:
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

new_hash = Hash_Table()
new_hash.print_table()