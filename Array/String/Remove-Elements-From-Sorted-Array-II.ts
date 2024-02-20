// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

//Example 1:

//Input: nums = [1,1,1,2,2,3]
//Output: 5, nums = [1,1,2,2,3,_]

export function removeDuplicates(nums: number[]): number {
    let count = 1;
    let appear = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            if (appear == 1) {
                nums[count] = nums[i];
                count++
                appear++;
            } else if (appear === 2) continue;
        } else {
            nums[count] = nums[i]
            ++count;
            appear = 1
        }
    }
    return count;
};

console.log(removeDuplicates([1,1,1,2,2,3]))