import { statesAndTerritories, emailList, usernameList } from "./data";

/**
 * @description The simplest and most straightforward way of searching for the existence of an element in an array (or any datastructure or primitive for that matter) is a linear search.
 *              Literally looking at each element, one by one, for the target element. In some cases this is often the only (therefore the best/most efficient) method to use. (i.e. when no sorting available)
 */

// Just return the index if tgt found, otherwise return -1
function linearSearch(arr: string[], tgt: string): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tgt) return i;
    }
    return -1;
}

console.log(linearSearch(usernameList, "amuddb"));
console.log(linearSearch(usernameList, "johnny100"));

