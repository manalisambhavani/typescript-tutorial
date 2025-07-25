const users: {
    name: string;
    age: number;
}[] = [];

// add user John with age 30
users.push({
    name: "john",
    age: 30,
});

// Add user Jane with age 25
users.push({
    name: "jane",
    age: 56,
});

console.log("Users:", users);

// update John's age to 31
const indexFound = users.findIndex((item) => {
    console.log("Item:", item);
    return item.name === "john";
});

console.log("Index of john:", indexFound);

if (indexFound == -1) {
    console.log("Value not Found");
} else {
    // users[indexFound] = { name: "john", age: 31 };
    users[indexFound].age++;
}

console.log("Array after updating index:", users);
