/**
 * @description - Basic 'Binary Search' - https://leetcode.com/problems/binary-search/
 *                Given an array of integers @param nums
 *                which is sorted in ascending order,
 *                and an integer @param target,
 *                write a function to search target in nums.
 *                If target exists, then @return its index. Otherwise, return -1.
 *                You must write an algorithm with O(log n) runtime complexity.
 */


// You realize to achieve a runtime coplexity of O(log n) you'll need to halve the operation area on each run
// A recusive solution works perfectly here. 
function search(nums: number[], target: number): number {

  return binarySearch(nums, target, 0, nums.length -1);
  
  function binarySearch (nums: number[], target: number, start: number, end: number): number {
    let midpoint = Math.floor((start + end) / 2);
    if ( start > end ) return -1;
    if ( target === nums[midpoint] ) return midpoint;
    if ( target > nums[midpoint] ) {
      // search right
      return binarySearch(nums, target, midpoint + 1, end);
    }
    else {
      // search left
      return binarySearch(nums, target, start, midpoint - 1);
    }
  }
}



console.log(search([2, 5, 10, 15, 22, 25, 28, 32, 39, 41, 52], 52));
