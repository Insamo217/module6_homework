function func1(a) {
  return function(b) {
  	return a+b
  }
};

const sumFunction = func1(2);

const sum = sumFunction(3)

console.log(sum); // 5
