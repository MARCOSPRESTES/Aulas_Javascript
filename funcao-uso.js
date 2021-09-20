function somar (num1, num2) {
  return (num1 + num2);
}

function media (num1, num2, num3, num4) {
  return ((num1 + num2 + num3 + num4) / 4);
}

var res = somar(4, 5);
console.log('A soma é ' + res);
res = media(1, 2, 3, 4);
console.log('A média é ' + res);