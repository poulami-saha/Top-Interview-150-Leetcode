//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times. 
//You may assume that the majority element always exists in the array.

function majorityElement(nums: number[]): number {
    const majority = Math.ceil(nums.length / 2)
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const count = map.get(nums[i])
        if (count !== undefined) {
            map.set(nums[i], count + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for (let [key, value] of map) {
        if (value >= majority) {
            return key;
        }
    }
    return -1;
};

console.log(majorityElement([3,2,3])) //3