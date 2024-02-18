//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums: number[], k: number):number[] {
    function reverse(arr:number[], start:number, end:number) {
        while (start < end) {
          [arr[start], arr[end]] = [arr[end], arr[start]];
          start++;
          end--;
        }
      }
    
      k %= nums.length;
    
      reverse(nums, 0, (nums.length - 1));
      reverse(nums, 0, (k - 1));
      reverse(nums, k, (nums.length - 1));
      return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))