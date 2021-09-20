var num = Array();
var soma = 0;
console.log ('Tamanho inicial: ' + num.length);
for (var i = 0; i < 100; i++) {
  num[i] = Math.floor(Math.random() * 500 + 1);
  soma += num[i]; // soma = soma + num[i];
  console.log(num[i]);
}
console.log ('Tamanho final: ' + num.length);
console.log ('Média: ' + (soma / num.length));