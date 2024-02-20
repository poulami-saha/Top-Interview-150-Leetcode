// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

var removeDuplicates = function(nums) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[k]!==nums[i]){
            nums[k+1]=nums[i];// Zero th element will never change, hence start from position 1
            ++k
        }
    }
    return k+1;// position of k+the 0th position
}