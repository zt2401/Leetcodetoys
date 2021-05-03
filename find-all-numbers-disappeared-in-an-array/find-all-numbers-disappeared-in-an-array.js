/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // var dis = [];
    // var set = new Set(nums);
    // for (var i = 1; i < nums.length; i++) {
    //     if (!set.has(i)) dis.push(i)
    // }
    // return dis;
    
     let res = [];
    let len = nums.length;
    let set = new Set(nums) // [1,2,3,4,7,8];
    for (let i = 1; i <= len; i ++) {
        if(!set.has(i)) res.push(i)
    }
    return res;
};