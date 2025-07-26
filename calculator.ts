import { div, mul, sub, sum } from "./calculate-fuctions";

console.log("~ process.argv:", process.argv);

const method = process.argv[2];
console.log("🚀 ~ method:", method);
const Value1 = Number(process.argv[3]);
console.log("🚀 ~ Value1:", Value1);
const value2 = Number(process.argv[4]);
console.log("🚀 ~ value2:", value2);

if (method === "sum") {
    const Response = sum(Value1, value2);
    console.log({
        Response,
        message: "Sum Operation Successful",
    });
} else if (method === "sub") {
    const Response = sub(Value1, value2);
    console.log({
        Response,
        message: "Sub Operation Successful",
    });
} else if (method === "mul") {
    const Response = mul(Value1, value2);
    console.log({
        Response,
        message: "Multiplication Operation Successful",
    });
} else if (method === "div") {
    const Response = div(Value1, value2);
    console.log({
        Response,
        message: "Division Operation Successful",
    });
}
