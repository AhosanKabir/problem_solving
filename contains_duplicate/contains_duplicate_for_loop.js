// Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums 
 * @return {boolean}
 */
const contains_duplicate = function(nums){
    for(let i = 0; i < nums.length; i++){
        for( let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    };

    return false
}
console.log(contains_duplicate ([1,2,3,4]));
