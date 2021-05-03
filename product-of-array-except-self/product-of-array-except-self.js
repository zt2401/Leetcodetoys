/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var products = [];
    for (var i = 0; i < nums.length; i++) {
        var currentProduct = 1;
        for (var z = 0; z < nums.length; z++) {
            if (z !== i) {
                if (nums[z] === 0) {
                    currentProduct = 0;
                }
                currentProduct = currentProduct * nums[z];
            } 
        }
        products.push(currentProduct)
    }
    return products;
};