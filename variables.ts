let a: number = 5;

let b: string = "hello world";

let obj: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "manali",
    age: 41,
    isStudent: false,
};

console.log({
    a,
    b,
    person: obj,
    name: obj.name,
    personAge: obj.age,
    isStudent: obj.isStudent,
});
