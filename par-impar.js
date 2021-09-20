const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite um número: ', (num) => {
  if (num % 2 !== 0)
    console.log("Impar.");
  else
    console.log("Par.");
  teclado.close();
});