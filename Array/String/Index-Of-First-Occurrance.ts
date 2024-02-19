//Given two strings needle and haystack, return the index of the first occurrence of needle 
//in haystack, or -1 if needle is not part of haystack.

//Example 1:

//Input: haystack = "sadbutsad", needle = "sad"
//Output: 0

function strStr(haystack: string, needle: string): number {
    const needleLength = needle.length;
    const arrHaystack = Array.from(haystack);

    for (let i = 0; i < arrHaystack.length; i++) {
        const subArr = arrHaystack.slice(i, i + needleLength);
        console.log(subArr)
        if (subArr.join("") === needle) {
            return i
        }
    }
    return -1;
};

console.log(strStr("hello", "ll"))