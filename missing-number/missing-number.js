/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const x = nums.reduce((a, b) => (a+b))
    return (nums.length * (nums.length + 1) / 2) - x
};