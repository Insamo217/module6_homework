function isPrimeNum(number) {
  if (typeof number === "number") {
    if (number === 0) {
      return `${number} - не является простым числом`;
    } else if (number === 1) {
      return `${number} - не является простым числом`;
    } else if (number > 1000) {
      return `Данные неверны`;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return `${number} - не является простым числом`;
      }
    }
    return `${number} - простое число`;
  } else {
    return "Введено не число";
  }
}

console.log(isPrimeNum(5));
