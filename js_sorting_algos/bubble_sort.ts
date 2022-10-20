 import { performance } from 'perf_hooks';

/**
 * @description The simplest sorting algorithm that works by repeatedly comparing and swapping adjacent elements if they are in the wrong order.
 *              Not a suitable algorithm for large datasets as it has bad average and worst-case time complexities
 */


// First try at my own implementation
function my_bubble_sort(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let swap = arr[i];
                arr[i] = arr[j]
                arr[j] = swap
            }
        }
    }
    return arr;
}

// console.log(my_bubble_sort([4,1,9,8,5,3]))

/**
 * @description This implementation will save at least one loop by foregoing comparing the first element against itself on the first iteration
 */
function better_bubble_sort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

// console.log(better_bubble_sort([4,1,9,8,5,3]))

let start1 = performance.now();
console.log(better_bubble_sort([15,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))
let start2 = performance.now();
console.log(`better_bubble_sort: ${start2 - start1}`)
/**
 * @description This is a 'fully' optimized bubble-sort where we make use of a short-circuit 'noSwaps' variable to optimize nearly-sorted lists. We will initialize it to true, signifying
 *              Nothing was swapped, and only trigger it to false when we make a swap. This will cut out the unecessary iterations through the array in cases of nearly-sorted arrays
 *              
 */

function fully_optimized_bubbler (arr: number[]): number[] {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                noSwap = false;
                let swap = arr[i];
                arr[j] = arr[j+1];
                arr[j] = swap;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

let start3 = performance.now();
console.log(fully_optimized_bubbler([15,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))
let start4 = performance.now();
console.log(`fully_optimized_bubbler: ${start4 - start3}`)