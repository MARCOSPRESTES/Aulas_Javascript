const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite um número: ', (num) => {
  var fatorial = 1;
  for (var i = num; i > 1; i--) {
    fatorial *= i;
  }
  console.log ("A fatorial de " + num + " é " + fatorial);
  teclado.close();
});