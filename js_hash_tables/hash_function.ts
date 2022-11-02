import { performance } from 'perf_hooks';

interface SimpleCharMap {
    [character: string]: number
}

function simpleHash(input: string, listSize: number, calbk?: object) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        total = (total + input[i].charCodeAt(0)) % listSize;
    }
    return total;
}

let start = performance.now()
let answer = simpleHash('apple', 10)
let end = performance.now()
console.log(`apple hashed to: ${answer} in ${end - start} secs `);


let start2 = performance.now()
let answer2 = simpleHash('salamander', 10)
let end2 = performance.now()

console.log(`salamander hashed to: ${answer2} in ${end2 - start2} secs `);