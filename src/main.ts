const range = function* (start: number, end: number, step: number) {
  let current = start;
  console.log("With Generator");
  while (current <= end) {
    yield current;
    current = current + step;
  }
};

for (const value of range(0, 10, 1)) {
  console.log(value);
}

const range2 = function (start: number, end: number, step: number) {
  let current = start - 1;
  console.log("With Iterator");
  return {
    next() {
      while (current < end) {
        current = current + step;
        return { value: current, done: false };
      }
      return { value: undefined, done: true };
    },
  };
};

const iterator = range2(1, 5, 1);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
