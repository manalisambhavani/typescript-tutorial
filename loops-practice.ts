// const numbers = [1, 2, 3, 4, 5, 6];

// const evens = numbers.filter((ele) => {
//     return ele % 2 === 0;
// });

// const odds = numbers
//     .filter((ele) => {
//         return ele % 2 === 1;
//     })
//     .map((ele) => {
//         return ele * ele;
//     });

// console.log(evens); // [2, 4, 6]
// console.log(odds);

// const people = [
//     { name: "Tom", age: 15 },
//     { name: "Sara", age: 22 },
//     { name: "Mike", age: 17 },
// ];

// const adult = people.find((ele) => {
//     return ele.age >= 18;
// });

// console.log(adult); // { name: "Sara", age: 22 }

// =============================================================
// 🔶 1. Map — Add greeting to each name
// Input:
const namesArr = ["John", "Emma", "Steve"];

/**
 * // Output:
["Hello John", "Hello Emma", "Hello Steve"]
 */
// ✳️ Hint: Use map to prefix each name with "Hello".
// =============================================================

// =============================================================
// 🔶 2. Filter — Get products in stock
const products = [
    { name: "Pen", inStock: true },
    { name: "Pencil", inStock: false },
    { name: "Notebook", inStock: true },
];

// // Output:
// [{ name: "Pen", inStock: true }, { name: "Notebook", inStock: true }]
// ✳️ Hint: Use filter to return only available products.
// =============================================================

// =============================================================
// 🔶 3. Find — Find the first student with grade 'A'
const students = [
    { name: "Ravi", grade: "B" },
    { name: "Kiran", grade: "A" },
    { name: "Sita", grade: "C" },
];

// // Output:
// { name: "Kiran", grade: "A" }
// ✳️ Hint: Use find to locate the first "A" grade.
// =============================================================

// =============================================================
// 🔶 4. FindIndex — Find index of number divisible by 7
const numbersArr = [3, 10, 14, 22, 30];

// // Output:
// 2  // because 14 is divisible by 7
// ✳️ Use findIndex to locate it.
// =============================================================

// =============================================================
// 🔶 5. Filter + Map — Get names of adults (age ≥ 18)
const people = [
    { name: "Anu", age: 17 },
    { name: "Manu", age: 21 },
    { name: "Vinu", age: 18 },
];

// // Output:
// ["Manu", "Vinu"]
// ✳️ Use filter to get adults and map to get their names.
// =============================================================

// =============================================================
// 🔶 6. Map — Calculate final prices with 10% tax
const prices = [100, 200, 300];

// // Output:
// [110, 220, 330]
// ✳️ Use map to add 10% tax to each price.
// =============================================================

// =============================================================
// 🔶 7. Find — Find the first even number greater than 20
const numbers = [13, 25, 22, 30, 17];

// // Output:
// 22
// ✳️ Use find with a compound condition.
// =============================================================

// =============================================================
// 🔶 8. Filter — Get all tasks that are not completed
const todos = [
    { task: "Code", done: true },
    { task: "Sleep", done: false },
    { task: "Read", done: false },
];

// // Output:
// [{ task: "Sleep", done: false }, { task: "Read", done: false }]
// ✳️ Use filter.
// =============================================================

// =============================================================
// 🔶 9. FindIndex — Find index of product named "Phone"
const items = [
    { name: "TV", price: 300 },
    { name: "Phone", price: 600 },
    { name: "Watch", price: 100 },
];

// // Output:
// 1
// ✳️ Use findIndex to find the position of "Phone".
// =============================================================

// =============================================================
// 🔶 10. Chained Use — Get email addresses of users older than 25
const usersArr = [
    { name: "Ajay", age: 24, email: "ajay@mail.com" },
    { name: "Sneha", age: 28, email: "sneha@mail.com" },
    { name: "Raj", age: 30, email: "raj@mail.com" },
];

// // Output:
// ["sneha@mail.com", "raj@mail.com"]
// ✳️ Use filter then map.
// =============================================================
