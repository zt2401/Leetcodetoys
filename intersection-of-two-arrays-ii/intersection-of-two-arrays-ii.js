/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var ht = {} 
    var finArr = []

    for (var i in nums1) {
        if (!ht[nums1[i]]) {
            ht[nums1[i]] = 1;
        } else {
            ht[nums1[i]] += 1;
        }
    }
    
    console.log("ht", ht);
    
    for (var j in nums2) {
        if (ht[nums2[j]] > 0) {
            finArr.push(nums2[j])
            ht[nums2[j]]--
        }
    }

    return finArr;
};