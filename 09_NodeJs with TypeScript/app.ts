const num1Elem = document.getElementById("num1") as HTMLInputElement;
const num2Elem = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResults: Array<Number> = [];
const textResults: String[] = [];

type NumOrString = number | string;

type Result = {
  val: NumOrString;
  timestamp: Date;
};

interface ResultObj {
  val: NumOrString;
  timestamp: Date;
}

class ResultObjClass {
  constructor(val: NumOrString, timestamp: Date) {}
}

function add(num1: number | string, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return `${num1} + ${num2}`;
  }
  return +num1 + +num2;
}

function printResult(resultObj: { val: number | string; timestamp: Date }) {
  console.log(resultObj.val);
}

// if (buttonElement) {
buttonElement.addEventListener("click", () => {
  const num1 = num1Elem.value;
  const num2 = num2Elem.value;

  const result = add(num1, num2);

  if (typeof result === "string") {
    textResults.push(result);
  } else {
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

const myPromise = new Promise<String>((resolve, reject) => {
  setTimeout(() => {
    resolve("It worked");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result.split(" "));
});
