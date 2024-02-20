// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return '';
    for (let i = 0; i < strs[0].length; i++) {
        if (!strs.every(str => str[i] === strs[0][i])) {
            return strs[0].slice(0, i)
        }
    }
    return strs[0]
};