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

console.log(my_bubble_sort([4,1,9,8,5,3]))