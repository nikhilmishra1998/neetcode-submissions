class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let arr = [];
        let map = {};
        for(let i = 0, j = 0; i < strs.length; i++){
            let sortedStr = strs[i].split('').sort().join('');
            if(map.hasOwnProperty(sortedStr)){
                arr[map[sortedStr]].push(strs[i]);
            } else {
                map[sortedStr] = j;
                arr.push([strs[i]]);
                j++
            }
        }
        console.log(arr, 'arr');
        return arr;
    }
}
