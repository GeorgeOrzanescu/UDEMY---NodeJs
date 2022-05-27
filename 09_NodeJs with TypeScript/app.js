"use strict";
const num1Elem = document.getElementById("num1");
const num2Elem = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numResults = [];
const textResults = [];
class ResultObjClass {
    constructor(val, timestamp) { }
}
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return `${num1} + ${num2}`;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
// if (buttonElement) {
buttonElement.addEventListener("click", () => {
    const num1 = num1Elem.value;
    const num2 = num2Elem.value;
    const result = add(num1, num2);
    if (typeof result === "string") {
        textResults.push(result);
    }
    else {
        numResults.push(result);
    }
    const resultElem = document.querySelector("p");
    if (resultElem) {
        resultElem.innerText = result.toString();
    }
    printResult({ val: result, timestamp: new Date() });
});
// }
console.log(new ResultObjClass(1, new Date()));
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(" "));
});
