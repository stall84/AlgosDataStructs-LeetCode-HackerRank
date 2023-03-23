// Pop-Quiz Bubble-Sort

function bubbleSort(list: Array<number>): Array<number> {

    // We will need like a 'current' variable to  store the current element, 
    // and also a current+1 variable to compare against (the very next element).
    for (let i = 0; i < list.length - 1; i++) {
        for (let k = i + 1; k <= list.length; k++) {
            if (list[i] > list[k]) {
                let swap = list[i];
                list[i] = list[k];
                list[k] = swap;
            }
        }
    }
    return list;
    // i=0 k=1 [1,3,5,2,4]
    // i=0 k=2 [1,3,5,2,4]
    // i=0 k=3 [1,3,5,2,4]
    // i=0 k=4 [1,3,5,2,4]
    // i=1 k=2 [1,3,5,2,4]
    // i=1 k=3 [1,2,5,3,4]
    // i=1 k=4 [1,2,5,3,4]
    // i=2 k=3 [1,2,3,5,4]
    // i=2 k=4 [1,2,3,5,4]
    // i=3 k=4 [1,2,3,4,5]
    // 10 operations
    // return [3,1,5,2,4]
}

console.log('bubbleSortv1 input=[3,1,5,2,4] : ', bubbleSort([3, 1, 5, 2, 4]))