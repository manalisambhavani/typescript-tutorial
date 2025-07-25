const names: string[] = ["meera", "tina", "Arti", "Pooja"];
// console.log("Length:", names.length);

// for (let i = 0; i < names.length; i++) {
//     console.log("Current Value of i:", names[i]);
// }

names.forEach((Value, index) => {
    console.log("element:", Value, index);
});

const res = names.map((element) => {
    return {
        username: element,
    };
});

console.log("Response:", res);

const fruits = ["pineapple", "mango", "papaya", "mango", "banana", "apple"];

const res1 = fruits.find((ele) => {
    return ele === "mango";
});

console.log("res1: ", res1);

const res2 = fruits.filter((ele) => {
    return ele === "mango";
});

console.log("res2: ", res2);

const mangoIndex: number[] = [];

fruits.forEach((Value, index) => {
    if (Value === "mango") {
        mangoIndex.push(index);
    }
});

console.log(mangoIndex);

console.log(fruits);

mangoIndex.forEach((index) => {
    fruits[index] = "riped mango";
});

console.log(fruits);
