const readline = require('readline');

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

teclado.question('Digite um número: ', 
  (valor) => {
  teclado.question('Digite o Prefixo: ', 
    (prefixo) => {

          var kilo = parseInt(valor) / 1000;
          var mega = parseInt(valor) / 1000000;
          var giga = parseInt(valor) / 1000000000;
          var tera = parseInt(valor) / 1000000000000;
          console.log("Resultado: ");
          console.log(kilo + " k");
          console.log(mega + " M");
          console.log(giga + " G");
          console.log(tera + " T");
          
    });
  });
