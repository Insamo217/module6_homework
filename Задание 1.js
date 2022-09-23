const arrTest = [1, "test", "", 4, 4, 5, 3, 1, 1, 2, 6, 0, "$"];

function arrayParsing(arr) {
  let numZero = 0;
  let numEven = 0;
  let numOdd = 0;
  let numNot = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] === 0) {
        numZero++;
      } else if (arr[i] % 2) {
        numOdd++;
      } else {
        numEven++;
      }
    } else {
      numNot++;
    }
  }

  console.log(`Кол-во нулей - ${numZero}`);
  console.log(`Кол-во четных чисел - ${numEven}`);
  console.log(`Кол-во нечетных чисел - ${numOdd}`);
  console.log(`Кол-во нечисловых значений - ${numNot}`);
}

arrayParsing(arrTest);
