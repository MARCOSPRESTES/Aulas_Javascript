var hoje = new Date();
var semana = new Array("Domingo",
  "Segunda-feira", "Terça-feira",
  "Quarta-feira", "Quinta-feira",
  "Sexta-feira", "Sábado");

console.log("Dias da Semana:");
for (var i = 0; i < semana.length; i++) {
  console.log (semana[i]);
}

console.log ("Hoje é " + semana[hoje.getDay()]);