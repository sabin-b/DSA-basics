// todo: problem 1
function createHelloWorld() {
  return function (...args: any) {
    return "Hello World";
  };
}

// const f = createHelloWorld();
// f([{}, null, 42]);

// todo: problem 2

// function createCounter(count: number) {
//   return function () {
//     return count++;
//   };
// }

// const counter = createCounter(10);

// todo: problem 3
function expect(expectVal: any) {
  return {
    toBe(value: any) {
      if (value === expectVal) return true;
      else throw new Error("Not Equal");
    },
    notToBe(value: any) {
      if (value !== expectVal) true;
      else throw new Error("Equal");
    },
  };
}

// const ans = expect(5).toBe(null);
// const ans2 = expect(5).notToBe(null);
// console.log(ans);
// console.log(ans2);

// todo: Problem 4
type CreateCounterProps = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): CreateCounterProps {
  let initial: number = init;
  return {
    increment: () => (initial += 1),
    decrement: () => (initial -= 1),
    reset: () => (initial = init),
  };
}

const test = createCounter(10);
// console.log(test.increment());
// console.log(test.reset());
// console.log(test.decrement());
// console.log(test.increment());
// console.log(test.increment());

// todo : problem 5
function map(arr: number[], fn: (value: number, index: number) => number) {
  const returnArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnArray.push(fn(arr[i], i));
  }
  return returnArray;
}

function plusOne(n: number): number {
  return n + 1;
}

function plusI(n: number, i: number): number {
  return n + i;
}

function constant(n: number, i: number) {
  return 42;
}

const ansPlusone = map([10, 20, 30], plusOne);
const ansPlusI = map([10, 20, 30], plusI);
const ansConstant = map([10, 20, 30], constant);
