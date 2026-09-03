class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Method #1 
    // isAnagram(s, t) {
    //     if(s.length !== t.length || typeof s != "string" || typeof t != "string" ){
    //         return false;
    //     }
    //     return s.split('').sort().join('') === t.split('').sort().join('');
    // }


    //Method #2
    isAnagram(s, t) {
            if(s.length !== t.length || typeof s != "string" || typeof t != "string" ){
            return false;
        }
        let hashMap = {}
        for(let i=0; i < s.length; i++){
            if(hashMap[s[i]] == undefined){
                hashMap[s[i]] = 1
            } else {
                hashMap[s[i]]++
            }

            if(hashMap[t[i]] == undefined){
                hashMap[t[i]] = -1
            } else {
                hashMap[t[i]]--
            }
        }
        for(let hash in hashMap){
            if(hashMap[hash]!= 0){
                return false
            }
        }
        return true
    }
}
