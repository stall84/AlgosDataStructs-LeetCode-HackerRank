import { statesAndTerritories, emailList, usernameList } from "./data";

function binary_search(arr: string[], tgt: string): number {
    if (arr.length === 1 && arr[0] === tgt) return 0;
    else if (arr.length > 1) {
        let midpoint = Math.floor( ( arr.length - 1 ) / 2 );
        let left = arr.slice( 0, midpoint );
        let right = arr.slice( midpoint + 1, arr.length -1 )
        if (arr[midpoint] === tgt) return midpoint;
        else {
            binary_search(left, tgt);
            binary_search(right, tgt);
        }
    }
        return -1;
}



console.log(binary_search(usernameList, "ckenwinm"));
console.log(binary_search(usernameList, "stall84"));