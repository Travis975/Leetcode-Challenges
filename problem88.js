// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    // Pointers for nums1, nums2, and the merged array
    // Last element in the initial part of nums1
    let p1 = m - 1;
    // Last element in nums2
    let p2 = n - 1; 
    // Last position in nums1
    let pMerged = m + n - 1;
    // Merge nums1 and nums2 from the back to the front
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[pMerged] = nums1[p1];
            p1--;
        } else {
            nums1[pMerged] = nums2[p2];
            p2--;
        }
        pMerged--;
    }

    // If there are any remaining elements in nums2, copy them
    while (p2 >= 0) {
        nums1[pMerged] = nums2[p2];
        p2--;
        pMerged--;
    }
};