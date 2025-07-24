// console.log("0th Element:", arr[0]);

// console.log("1st element:", arr[1]);

// console.log("2nd Element", arr[2]);

// console.log("3rd Element", arr[3]);

// console.log("4th Element", arr[4]);

// console.log("5th Element", arr[5]);

// console.log("Array Beforre Push", arr);

// arr.push(56);

// console.log("Array After Push", arr);

// arr.pop();
// console.log("Array After POP", arr);

// arr.unshift(-1);

// console.log("Array After  Unshift", arr);

// arr.shift();

// console.log("Array After Shift", arr);

/**
 *
 * =======================================================================
 *
 */

// const arr: number[] = [0, 1, 2, 500, 4, 5];

// const indexFound = arr.findIndex((item) => {
//     console.log("Item:", item);
//     return item === 500;
// });

// console.log("Index of Value 500:", indexFound);

// if (indexFound == -1) {
//     console.log("Value not Found");
// } else {
//     arr[indexFound] = 2000;
// }

// console.log("Array after updating index:", arr);

/**
 *
 * =======================================================================
 *
 */

const arr: string[] = ["a", "b", "c", "d", "e", "f"];

const indexFound = arr.findIndex((item) => {
    console.log("Item:", item);
    return item === "d";
});

console.log("Index of Value 'd':", indexFound);

if (indexFound == -1) {
    console.log("Value not Found");
} else {
    arr[indexFound] = "D";
}

console.log("Array after updating index:", arr);
