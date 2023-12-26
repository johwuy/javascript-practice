/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    const strMiddleBreakpoint = Math.floor(str.length / 2)
    const firstHalfUpper = str.slice(0, strMiddleBreakpoint).toUpperCase()
    const secondHalfLower = str.slice(strMiddleBreakpoint).toLowerCase()
    return firstHalfUpper + secondHalfLower;
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};