

class LLNode {
    public val: any;
    public next: LLNode | null;
    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    public length: number = 0;
    public tail: LLNode | null = null;
    public head: LLNode | null = null;
    constructor() { }

    deprecated_push(newValue: number): void {
        // Calling this 'deprecated' as this was my personal first solution to a linked-list push method..
        // The regular-named version further below from the tutorial does use less code / less if-statements.
        // User will want to add a value, so we need to instantiate a new node to take on that value for them
        const node = new LLNode(newValue);
        if (this.length === 0) {
            this.head = node;
        }
        if (this.length > 0) {
            this.tail!.next = node;
        }
        this.tail = node;
        this.length += 1
    }

    push(newValue: number): SinglyLinkedList {
        const node = new LLNode(newValue);
        if (!this.head) {
            this.head = node;
            this.tail = this.head; // could also easily be this.tail = node; .. however this is conceptually minimal even if slightly more code
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;        // I'm not sure why we are returning the pushed-onto list from this method.. Other than if we might want to chain methods later on
    }

    pop(): LLNode | null | undefined {
        if (!this.head) return undefined;
        if (this.head === this.tail) {
            const temp = this.head;
            this.tail = null;
            this.head = null;
            this.length -= 1;
            return temp;
        } else {
            let previous = this.head;
            let temp = this.head.next;
            while (temp!.next) {
                previous = previous.next!;
                temp = temp!.next;
            }
            previous.next = null;
            this.tail = previous;
            this.length -= 1;
            return temp;
        }
    }

    shift(): LLNode | null | undefined {
        if (!this.head) return undefined;
        if (this.head === this.tail) {
            const temp = this.head;
            this.tail === null;
            this.head === null;
            this.length -= 1;
            return temp;
        } else {
            const temp = this.head;
            this.head = this.head.next;
            this.length -= 1
            return temp;
        }
    }

    unshift(newValue: number): SinglyLinkedList {
        const newNode = new LLNode(newValue);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length += 1;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return this;
    }
}

const test1 = new SinglyLinkedList();

test1.push(3);
console.log('log1: ', test1);
test1.push(5);
test1.push(44)
test1.push(55);
console.log('log2: ', test1)
const bertpop = test1.pop();
console.log('bertpop: ', bertpop);
console.log('log3: ', test1);
const flerppop = test1.pop();
console.log('flerppop: ', flerppop);
const derppop = test1.pop();
console.log('derppop: ', derppop);
console.log('4th log: ', test1)
const laspop = test1.pop();
console.log('laspop: ', laspop);
console.log('5th log: ', test1);

const test2 = new SinglyLinkedList();
test2.push(15);
test2.push(10);
console.log('test2: ', test2)
test2.unshift(30);
console.log('test2 after unshift: ', test2);
export { }