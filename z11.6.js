function printNumbersInterval15_150() {
    var i = 5;
    var timerId = setInterval(function() {
      console.log(i);
      if (i == 15) clearInterval(timerId);
      i++;
    }, 150);
  }
  printNumbersInterval15_150();