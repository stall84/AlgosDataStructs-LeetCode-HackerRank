/**
 * @description Given an integer, convert it to a roman numeral. https://leetcode.com/problems/integer-to-roman/
 * @param num (An integer between 1 and 3999)
 */

/**
 *     Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
 */

function intToRoman(num: number): string {

    let holder = ''

    const intMap = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    while (num > 0) {
        for (let [symbol, value] of Object.entries(intMap)) {
            if (num >= value) {
                holder += symbol;
                num -= value;
            }
        }
    }
    return holder;

}

console.log('IntToRoman on 82: ', intToRoman(82))


export { }