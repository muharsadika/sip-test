function PrintSepuluhKali(n) {
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(n + ' x ' + i + ' = ' + result);
  }
}

let input = 2;
PrintSepuluhKali(input);
