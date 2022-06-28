/**
 * @description Given the head of a sorted linked list, 
 * delete all duplicates such that each element appears only once. 
 * Return the linked list sorted as well.
 */

import { Node } from './class'

export default class {
    // const nodeValues = [1, 2, 3, 4, 5, 6, 7, 8]
    _linkedList: Node[] | null | any;
    nodeValues: number[] 
    
    constructor(nodeVals: number[]){
        this.nodeValues = nodeVals;
        this._linkedList = null
    }

    public set linkedList (nodeValueArr: number[]) {
        let result = this.listMaker(this.nodeValues)
        this._linkedList = result
    }
    public get linkedList () {
        console.log(this._linkedList)
        return this._linkedList
    }
    public async listMaker (nodeValueArr: number[]): Promise<Node[]> {
        const setValues = nodeValueArr.map((val: any) => {
            return new Node(val)
        })

        return setValues;
        
    }
}




