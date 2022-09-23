function interv(start, end) {
  let current = start;

  let timerId = setInterval(function () {
    console.log(current);
    if (current === end) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

interv(5, 10);
