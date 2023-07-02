/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
  
/** The solution using XOR (singleNumber function) has a linear runtime complexity of O(n),
  where n is the number of elements in the nums array.
  It iterates through the array once and performs a constant-time XOR operation for each element.
  */
    for (let i = 0; i <= nums.length; i++) {
        result ^= nums[i]

    }
    return result
};


/** 
Time Complexity: O(n)
Space Complexity: O(1) (constant extra space)
*/
