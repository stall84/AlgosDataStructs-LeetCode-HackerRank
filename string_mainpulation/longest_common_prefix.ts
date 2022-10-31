function longestCommonPrefix(strs: string[]): string {
    let longest = "";
    if (strs.length > 0 && strs[0].length > 0) {
        const first = strs.shift();
        for (let i = 0; i < strs.length; i++) {
            for (let j = 0; j < first!.length; j++) {
                console.log(`i: idx: ${i}, strs[i][j]: ${strs[i][j]} -- j: idx: ${j}, first[j]: ${first![j]}`)
                if (first![j] === strs[i][j]) {
                    longest += first![j]
                    console.log(`after += first[j], longest: ${longest}`)
                }
                
            }
                
            break;
        }
    }
    return longest;
    
};

console.log(longestCommonPrefix(['slam', 'slut', 'slurp']))