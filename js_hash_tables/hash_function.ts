import { performance } from 'perf_hooks';

interface SimpleCharMap {
    [character: string]: number
}

function simpleHash(input: string, listSize: number, calbk?: object) {
    const ourCharMap: SimpleCharMap = {
        'a': 3,
        'b': 4,
        'c': 5,
        'd': 6,
        'e': 7,
        'f': 8,
        'g': 9,
        'h': 10,
        'i': 11,
        'j': 12,
        'k': 13,
        'l': 14,
        'm': 15,
        'n': 16,
        'o': 17,
        'p': 18,
        'q': 19,
        'r': 20,
        's': 21,
        't': 22,
        'u': 23,
        'v': 24,
        'w': 25,
        'x': 26,
        'y': 27,
        'z': 28,
        '0': 29,
        '1': 30,
        '2': 31,
        '3': 32,
        '4': 33,
        '5': 34,
        '6': 35,
        '7': 36,
        '8': 37,
        '9': 38
    };

    let total = 0;
    for (let i = 0; i < input.length; i++) {
        total = (total + ourCharMap[input[i]]) % listSize;
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