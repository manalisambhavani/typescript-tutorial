function sum1(Value1: number, Value2: number): number {
    return Value1 + Value2;
}

// console.log("Ressult of Sum:", result);

const sum2 = (value1: number, value2: number): number => {
    console.log("Calculating Sum....");
    return value1 + value2;
};

const sum3 = (value1: number, value2: number): number => value1 + value2;

const result1 = sum1(10, 20);
const result2 = sum2(10, 20);
const result3 = sum3(10, 20);

console.log("Result of sum", result1);
console.log("Result of sum", result2);
console.log("Result of sum", result3);
