// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time 
// complexity and with the smallest space complexity possible

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    if (nums.length <= 1) return nums;

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return merge(sortArray(left), sortArray(right));

};
function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        }
        else{
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right]
}