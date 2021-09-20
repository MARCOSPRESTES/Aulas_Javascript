var hoje = new Date();
var semana = new Array("Domingo",
  "Segunda-feira", "Terça-feira",
  "Quarta-feira", "Quinta-feira",
  "Sexta-feira", "Sábado");
var meses = new Array("Janeiro",
  "Fevereiro", "Março", "Abril", "Maio",
  "Junho", "Julho", "Agosto", "Setembro",
  "Outubro", "Novembro", "Dezembro");
console.log("Hoje é " + semana[hoje.getDay()] + 
  ", dia " + hoje.getDate() + " de " + 
  meses[hoje.getMonth()] + " de " + hoje.getFullYear());
console.log(hoje.getDate() + "/" + (hoje.getMonth() + 1) +
"/" + hoje.getFullYear());