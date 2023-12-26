/**
 * Problem 6: Custom Sorting
 * 
 * Given a list students, sort the students by their grade (descending).
 * Use the .sort function.
 * 
 * @example [{name: "Chase", grade: 89}, {name: "Raman", grade: 92}] -> [{name: "Raman", grade: 92}, {name: "Chase", grade: 89}]
*/
function problem(students) {
    return students.sort(function(student1, student2) {
        return student2.grade - student1.grade
    })

    /* 
    return value > 0; sort b before a; [b, a]
    return value < 0; sort a before b; [a, b]

    Descending order: Highest to lowest
    The one on left should be the highest.
    If 'b' is the highest, and return vakue is positive then 'b' is the highest. b-a>0

    if 'a' is the highest and return value is negative then b-a < 0.
    */
}

const tests = [
    [[{name: "Chase", grade: 89}, {name: "Raman", grade: 92}], [{name: "Raman", grade: 92}, {name: "Chase", grade: 89}]],
    [[{name: "Peter", grade: 92}, {name: "Gillman", grade: 70}, {name: "Pattis", grade: 100}], [{name: "Pattis", grade: 100}, {name: "Peter", grade: 92}, {name: "Gillman", grade: 70}]]
]

module.exports = {problem, tests};