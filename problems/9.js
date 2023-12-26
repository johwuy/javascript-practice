/**
 * Problem 9: Custom Sorting
 * 
 * Given a list students, return the names of students who have a grade above 90 in alphabetical order.
 * Use the .map, .filter, and .sort functions.
 * 
 * @example [{name: "Chase", grade: 89}, {name: "Raman", grade: 92}, {name: "Peter", grade: 100}] -> ["Peter", "Raman"]
*/
function problem(students) {
    /* Original
    let above90 = students.filter(function(student) {
        return student.grade > 90;
    });
    let above90Names = above90.map(function(student) {
        return student.name;
    });
    let sortedNames = above90Names.sort()
    return sortedNames */

    /* Arrow Function
    let above90 = students.filter(student => student.grade > 90)
    let above90Names = above90.map(student => student.name)
    let sortedName = above90Names.sort()
    return sortedName */

    const sortedAbove90Names = students
        .filter(student => student.grade > 90)
        .map(student => student.name)
        .sort()
    return sortedAbove90Names
}

const tests = [
    [[{name: "Chase", grade: 89}, {name: "Raman", grade: 92}, {name: "Peter", grade: 100}], ["Peter", "Raman"]],
    [[{name: "Peter", grade: 92}, {name: "Gillman", grade: 70}, {name: "Pattis", grade: 100}], ["Pattis", "Peter"]],
    [[{name: "Chase", grade: 89}], []]
]

module.exports = {problem, tests};