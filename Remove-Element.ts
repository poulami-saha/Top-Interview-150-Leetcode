//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums 
//which are not equal to val.

//Consider the number of elements in nums which are not equal to val be k, to get accepted, 
//you need to do the following things:

//Change the array nums such that the first k elements of nums contain the elements 
//which are not equal to val. The remaining elements of nums are not important 
//as well as the size of nums.
//Return k.

//Example 1:

//Input: nums = [3,2,2,3], val = 3
//Output: 2, nums = [2,2,_,_]

function removeElement(nums: number[], val: number): number {
    let lastIndex = nums.length - 1;
    const occur = nums.filter(num => num === val).length;
    for (let i = 0; i < occur - 1; i++) {
        if (nums[i] === val) {
            if (nums[lastIndex] === val) {
                --lastIndex;
            }
            let c = nums[i];
            nums[i] = nums[lastIndex];
            nums[lastIndex] = c
            lastIndex--;
            console.log(nums)
        }
    }
    return nums.length - lastIndex;
};

console.log(removeElement([3, 2, 2, 3], 3))