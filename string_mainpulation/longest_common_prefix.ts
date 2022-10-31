function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];
    let longest = "";
    if (strs.length > 0 && strs[0].length > 0) {
        const first = strs.shift();
        for (let i = 0; i < strs.length; i++) {
            for (let j = 0; j < first!.length; j++) {
                console.log(`i: idx: ${i}, strs[i][j]: ${strs[i][j]} -- j: idx: ${j}, first[j]: ${first![j]}`)
                if (strs[i][j] == undefined) return longest.slice(0, longest.length / 2);
                if (first![j] === strs[i][j]) {
                    longest += first![j]
                    console.log(`after += first[j], longest: ${longest}`)
                } else {
                    break;
                }
            }
            break;
        }
    }
    return longest;
};

console.log(`Longest common prefix between 'SLAM' 'SLUT' and 'SLURP' is: '${longestCommonPrefix(['slam', 'slut', 'slurp']).toUpperCase()}'`)
console.log(`Longest common prefix between 'BIG' 'BIGGUNS' and 'BIGDADDY' is: '${longestCommonPrefix(['big', 'bigguns', 'bigdaddy']).toUpperCase()}'`)
console.log(`Longest common prefix between 'NERP' 'DERDLE' and 'BAN' is: '${longestCommonPrefix(['nerp', 'derdle', 'ban']).toUpperCase()}'`)
console.log(`Longest common prefix between 'FLOWER' 'FLOW ' and 'FLIGHT' is: '${longestCommonPrefix(['flower', 'flow', 'flight']).toUpperCase()}'`)
console.log(`Longest common prefix between 'A' is: '${longestCommonPrefix(['a']).toUpperCase()}'`)
console.log(`Longest common prefix between 'AB' 'A' is: '${longestCommonPrefix(['ab', 'a']).toUpperCase()}'`)