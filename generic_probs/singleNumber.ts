/**
 * @description Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 *              You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

function singleNumber(nums: number[]): any {
    const visited = new Set();
    const stack = [];
    const hashMap: any = {}
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] += 1
    };
    console.log('hashMap: ', hashMap);
    let answer = Object.keys(hashMap).find((ele:any) => hashMap[ele] === 1)
    console.log('answer : ', answer)
    return -1;
}

const testArr = [4,1,2,1,2,3,5,3,5];

console.log(singleNumber(testArr));