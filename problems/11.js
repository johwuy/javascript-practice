/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    const formatedString = str.toLowerCase().replaceAll(" ", "")
    function reverse(str){
        return str.split("").reverse().join("");
    }    
    return formatedString === reverse(formatedString)
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

console.log(problem(tests[4][0]))

module.exports = {problem, tests};