import { performance } from 'perf_hooks';

interface SimpleCharMap {
    [character: string]: number
}

function simpleHash(input: string, listSize: number, calbk?: object) {
    let total = 0;
    const selectPrime = 31;
    // Adding an upper limit of iterations to max 100 for performance
    for (let i = 0; i < Math.min(input.length, 100); i++) {
        total = (total * selectPrime + input[i].charCodeAt(0)) % listSize;
    }
    return total;
}

let start = performance.now()
let answer = simpleHash('apple', 13)
let end = performance.now()
console.log(`apple hashed to: ${answer} in ${end - start} secs `);


let start2 = performance.now()
let answer2 = simpleHash('salamander', 13)
let end2 = performance.now()

console.log(`salamander hashed to: ${answer2} in ${end2 - start2} secs `);

let start3 = performance.now()
let answer3 = simpleHash('can', 13)
let end3 = performance.now()

console.log(`can hashed to: ${answer3} in ${end3 - start3} secs `);

let start4 = performance.now()
let answer4 = simpleHash('how', 13)
let end4 = performance.now()

console.log(`how hashed to: ${answer4} in ${end4 - start4} secs `);