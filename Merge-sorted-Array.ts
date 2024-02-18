//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
//and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, 
//but instead be stored inside the array nums1. 
//To accommodate this, nums1 has a length of m + n, where the first m elements denote the 
//elements that should be merged, and the last n elements are set to 0 and should be ignored. 
//nums2 has a length of n.

//Example 1:
//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (nums1.length === 0 && nums2.length > 0) {
        nums2.forEach(elem => nums1.push(elem))
    } else {
        for (let i = m, j = 0; j < n; i++, j++) {
            nums1[i] = nums2[j]
        }
    }
    for (let i = 0; i < nums1.length - 1; i++) {
        for (let j = i + 1; j < nums1.length; j++) {
            if (nums1[i] > nums1[j]) {
                let c = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = c
            }
        }
    }
};