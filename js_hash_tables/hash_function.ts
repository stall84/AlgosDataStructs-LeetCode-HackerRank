interface SimpleCharMap {
    [character: string]: number
}

function simpleHash(inpt: string, calbk?: object) {
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
    for (let char of inpt) {
        total += ourCharMap[char]
    }
    return total;
}

