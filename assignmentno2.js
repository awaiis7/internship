//////////////------ASSIGNMENT NO 2--------///////

               // DATA:
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 80 },
    { name: "Charlie", grade: 95 },
    { name: "Dave", grade: 85 }
];

const newStudents = [
    { name: "Eve", grade: 88 },
    { name: "Frank", grade: 92 }
];

const nestedArray = [[1, 2], [3, 4, 5], [6]];
const string = "hello world";
const newStudent = { name: "Grace", grade: 87 };

// 1. CONCAT
const allStudents = students.concat(newStudents);
console.log("1. All Students:", allStudents);

// 2. ENTRIES
console.log("2. Entries:");
for (const [index, student] of students.entries()) {
    console.log(index, student);
}

// 3. EVERY
const allPassing = students.every(student => student.grade >= 70);
console.log("3. All passing:", allPassing);

// 4. FILL
const grades = students.map(student => student.grade).fill(100);
console.log("4. All 100 grades:", grades);

// 5. FILTER
const topStudents = students.filter(student => student.grade > 90);
console.log("5. Top students:", topStudents);

// 6. FIND
const charlie = students.find(student => student.name === "Charlie");
console.log("6. Charlie's grade:", charlie ? charlie.grade : "Not found");

// 7. FINDINDEX
const index85 = students.findIndex(student => student.grade === 85);
console.log("7. Index of student with 85 grade:", index85);

// 8. FLAT
const flattened = nestedArray.flat();
console.log("8. Flattened array:", flattened);

// 9. FLATMAP
const passingStatus = students.flatMap(student => ({
    name: student.name,
    passing: student.grade >= 70
}));
console.log("9. Passing status:", passingStatus);

// 10. FOREACH
console.log("10. Student names:");
students.forEach(student => console.log(student.name));

// 11. FROM
const stringArray = Array.from(string);
console.log("11. String as array:", stringArray);

// 12. INCLUDES (with .some for objects)
const hasEve = allStudents.some(student => student.name === "Eve");
console.log("12. Includes Eve:", hasEve);

// 13. INDEXOF (use .findIndex for objects)
const indexOfBob = students.findIndex(student => student.name === "Bob");
console.log("13. Index of Bob:", indexOfBob);

// 14. MAP (grades only)
const gradesArray = students.map(student => student.grade);
console.log("14. Array of grades:", gradesArray);

// 15. PUSH
students.push(newStudent);
console.log("15. After push:", students);

// 16. POP
const removedStudent = students.pop();
console.log("16. After pop, removed:", removedStudent);
console.log("Students:", students);

// 17. REVERSE
students.reverse();
console.log("17. After reverse:", students);

// 18. SHIFT
const shiftedStudent = students.shift();
console.log("18. After shift, removed:", shiftedStudent);
console.log("Students:", students);

// 19. REDUCE (average grade)
const averageGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("19. Average grade:", averageGrade);

            