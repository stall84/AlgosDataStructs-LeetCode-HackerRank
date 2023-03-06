

class HashTable {

    keyMap: Array<any>;

    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    private _hash(input: string): number {
        let total = 0;
        const selectPrime = 31;
        for (let i = 0; i < Math.min(input.length, 100); i++) {
            total = (total * selectPrime + input[i].charCodeAt(0)) % this.keyMap.length;
        }
        return total;
    }

    public set(input: string, value: string) {
        let hashed = this._hash(input);
        console.log(`hashed ${input} with: ${hashed}`)
        if (this.keyMap[hashed] == undefined) {
            this.keyMap[hashed] = new Array();
            this.keyMap[hashed].push([input, value])
        } else {
            this.keyMap[hashed].push([input, value])
        }
    }

    public get(input: string): string | undefined {

        let hashed = this._hash(input);
        if (this.keyMap[hashed] != undefined) {
            if (this.keyMap[hashed].length === 0) return undefined;
            for (let pair of this.keyMap[hashed]) {
                if (pair[0] == input) return pair[1];
                else {
                    return undefined;
                }
            }
        }
        return undefined;
    }

}


let test1 = new HashTable();

test1.set('salmon', '#08110')
test1.set('purple', '#99910')
test1.set('orange', '#55930')
test1.set('red', '#36780')
test1.set('auburn', '#33230')
test1.set('yellow', '#48209')
test1.set('burgundy', '#72139')
test1.set('burgundy2', '#82139')

console.log(test1.keyMap)

console.log(test1.get('red'))
console.log(test1.get('purple'))

export { }