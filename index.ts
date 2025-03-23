// todo: problem 1
function createHelloWorld() {
  return function (...args: any) {
    return "Hello World";
  };
}

// const f = createHelloWorld();
// f([{}, null, 42]);

// todo: problem 2

function createCounter(count: number) {
  return function () {
    return count++;
  };
}

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

const ans = expect(5).toBe(null);
const ans2 = expect(5).notToBe(null);
console.log(ans);
console.log(ans2);
