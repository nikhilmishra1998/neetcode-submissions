class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (!Array.isArray(nums)|| typeof target != "number" || nums.length < 2){
            return [-1, -1]
        }

        let i = 0;
        let j = 1;
        while (i < nums.length) {
            if((nums[i] + nums[j]) == target){
                return [i,j];
            }
            if(j>= (nums.length - 1)){
                i++;
                j = i + 1;
            } else {
                j++;
            }
        }

        return [-1, -1];
    }
}
