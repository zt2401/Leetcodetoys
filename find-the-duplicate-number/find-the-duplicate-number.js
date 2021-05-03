/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var keepTrack = {};
    
    for (var i = 0; i < nums.length; i++) {
        if (!keepTrack[nums[i]]) {
            keepTrack[nums[i]] = 1;
        } else {
            keepTrack[nums[i]] += 1;
        }
    }
    for (var number in keepTrack) {
        if (keepTrack[number] > 1) {
            return number;
        }
    }
};
