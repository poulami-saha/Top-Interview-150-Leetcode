// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

function romanToInt(s: string): number {
    let map = new Map<string, number>([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000], ["IV", 4], ["IX", 9], ["XL", 50], ["XC", 90],
    ["CD", 400], ["CM", 900]]);

    let newArr = Array.from(s);
    let sum = 0
    for (let i = 0; i < newArr.length; i++) {
        switch (newArr[i]) {
            case "I": {
                switch (newArr[i + 1]) {
                    case "V": {
                        console.log("hit")
                        sum = sum + (map.get("IV") ?? 0);
                        ++i;
                        break;
                    }
                    case "X": {
                        console.log("hit1")
                        sum = sum + (map.get("IX") ?? 0);
                        ++i;
                        break;
                    }
                    default:
                        console.log("hit2")
                        console.log(sum)
                        console.log(map.get(newArr[i]))
                        sum = sum + (map.get(newArr[i]) ?? 0);
                        console.log(sum)
                        break;
                }
            }
            case "X": {
                switch (newArr[i + 1]) {
                    case "L": {
                        sum = sum + (map.get("XL") ?? 0);
                        ++i;
                        break;
                    }
                    case "C": {
                        sum = sum + (map.get("XC") ?? 0);
                        ++i;
                        break;
                    }
                    default:
                        sum = sum + (map.get(newArr[i]) ?? 0);
                        break;
                }
            }
            case "C": {
                switch (newArr[i + 1]) {
                    case "D": {
                        sum = sum + (map.get("CD") ?? 0);
                        ++i;
                        break;
                    }
                    case "M": {
                        sum = sum + (map.get("CM") ?? 0);
                        ++i;
                        break;
                    }
                    default:
                        sum = sum + (map.get(newArr[i]) ?? 0);
                        break;
                }
            }
            default:
                console.log("hitted")
                sum = sum + (map.get(newArr[i]) ?? 0);
                break;
        }

    }
    return sum;
};

console.log(romanToInt("III"))