console.log("Soma dos múltiplos de 6 entre 6 e 120.");
var num = 6;
var soma = 0;

while (num <= 120) {
  soma += num; 
  num += 6;
}
console.log("Soma = " + soma);