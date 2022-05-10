/**
 * @description Write a function that reverses a string. The @param input string is given as an array of characters s.
 *              You must do this by modifying the input array in-place with O(1) extra memory.
 *              NOTE: Reverse in-place, nothing will be returned (Void return type)
 */

function reverseString(input: string[]): void {

    let leftPointer = 0;
    let rightPointer = input.length -1;

    while(leftPointer < rightPointer){
        // Since the requirements don't specify a time complexity constraint,
        // and only a space complexity constraint. Use a loop 
        let temp = input[leftPointer];
        let temp2 = input[rightPointer];
        let transfer = temp;
        temp = temp2;
        delete input[rightPointer]; // Could potentially/alternately use splice and pop
        input[rightPointer] = transfer;
        input[leftPointer] = temp;
        leftPointer++
        rightPointer--
    }
    console.log(input)
}

reverseString(['h','e','l','l','o'])