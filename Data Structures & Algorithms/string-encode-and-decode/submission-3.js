class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '##404##';
        let joinedStr = strs.join('-#-');
        if(!joinedStr) return '##200##';
        let outStr = '';
        let seprator = ' ';
        let strLength = joinedStr.length;
        for(let i = 0; i < strLength ; i++){
            outStr += joinedStr[i].charCodeAt(0);
            if(i< (strLength -1)){
                outStr += seprator;
            }
        }
        return outStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(encodedStr){
        if(encodedStr === '##404##') return [];
        if(encodedStr === '##200##') return [''];
        let mergedWords = encodedStr.split(" ").join();
        let strArr =  mergedWords.split(',');
        let finalDecodedStr = ''; 
        for (let j = 0; j < strArr.length; j++){
            finalDecodedStr += String.fromCharCode(Number(strArr[j]));
        }
        return finalDecodedStr.split('-#-');
    }
}
