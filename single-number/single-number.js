/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var holder = {};
    for (var i = 0; i < nums.length; i++) {
        if (!holder[nums[i]]) {
          holder[nums[i]] = 1;
        } else {
            holder[nums[i]] += 1;
        }
        
    }
    console.log(holder);
    for (var key in holder) {
        if (holder[key] === 1) {
            return key;
        }
    }
};