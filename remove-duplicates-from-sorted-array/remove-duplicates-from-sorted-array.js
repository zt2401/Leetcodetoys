/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var indexCounter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[indexCounter] = nums[i];
            indexCounter++;
        }
    }
    return indexCounter;
};