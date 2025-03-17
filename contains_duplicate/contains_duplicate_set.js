/**
 * @param {number[]} nums 
 * @return {boolean}
 */

const contains_duplicate = function(nums){
    let sets =  new Set(nums)
    if(sets.size === nums.length){
        return false
    }
    return true
}

console.log(contains_duplicate([1,2,3,1]));
