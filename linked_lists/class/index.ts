/**
 * @description Set up our Linked List and Linked List Node Classes to be exported/consumed in problems.
 */

export class Node {
    public val: number
    protected next: Node | null

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}