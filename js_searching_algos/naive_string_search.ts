/**
 * @description This is an O(n^2) nested-looping solution, but is good to illustrate the concept of 'looking-ahead' In this case we want a function
 *              that just returns the number of times a substring (the target) occurs in the larger string.
 */


function naive_string_search(str: string, tgt: string): number {

    // Set a counter variable, but this could also be 1 of 2 variables to store start-end indexes in a search
    // that asks for the indexes of the tgt substring or the length of substring in diff implementation
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < tgt.length; j++) {
            // The 'secret' to this look-ahead operation that I had missed was the relatively simple fact
            // that on the first elements, both being element 0, you can have your look-ahead in place already
            // and still get the same behavior as str[i] compared to tgt[j]. That being looking-ahead by str[i + j] compared tgt[j]
            if (str[i + j] !== tgt[j]) break;
            if (j === tgt.length - 1) 
                // If we loop all the way through the target without breaking-out.
                // Then we have matched the target string.. So increment counter
                counter++
        }           
    }
    return counter;
}


console.log(naive_string_search("lorie loled", "lo"));  // 2
console.log(naive_string_search("lorie loled", "lol")); // 1