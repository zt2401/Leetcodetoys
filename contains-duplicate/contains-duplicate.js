/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var container = [];
    for (var i = 0; i < nums.length; i++) {
        if (container.includes(nums[i])) {
            return true;
        }
        container.push(nums[i]);
        
    }
    
    return false;
};