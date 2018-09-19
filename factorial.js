function factorialRecurse(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorialRecurse(num - 1);
}

console.log(factorialRecurse(9));

function factorialWhile(num) {
  let product = 1;
  let i = 1;
  while (i < num + 1) {
    product *= i;
    i++;
  }
  return product;
}

console.log(factorialWhile(9));

function factorialFor(num) {
  let product = 1;
  for (let i = 1; i < num + 1; i++) {
    product *= i;
  }
  return product;
}

console.log(factorialFor(9));

function factorialSemi(array) {
  return _.reduce(array, function (memo, num) { return memo * num; });
}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(factorialSemi(test));
