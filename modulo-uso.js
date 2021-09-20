const sortear = require('./modulo-sortear.js');
const data = require('./modulo-data.js');

var dthr = new Date(2020, 4, 15, 14, 25, 50);

console.log(sortear.real());
console.log(sortear.inteiro(1, 100));

console.log(data.data(dthr));
console.log(data.hora(dthr));
console.log(data.dataExtenso(dthr));