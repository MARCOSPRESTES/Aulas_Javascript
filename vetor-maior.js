var num = Array();
var maior = 0;
for (var i = 0; i < 20; i++) {
  num[i] = Math.floor(Math.random() * 100 + 1);
  console.log(num[i]);
  if (num[i] > maior) {
    maior = num[i];
  }
}
console.log('O maior é ' + maior);