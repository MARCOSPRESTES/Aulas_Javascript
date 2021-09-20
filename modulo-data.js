exports.data = function(dt) {
  return dt.getDate() + "/" + (dt.getMonth() + 1) +
    "/" + dt.getFullYear();
}

exports.hora = function(dt) {
  return dt.getHours() + ":" + dt.getMinutes();
}

exports.dataExtenso = function(dt) {
  var semana = new Array("Domingo",
  "Segunda-feira", "Terça-feira",
  "Quarta-feira", "Quinta-feira",
  "Sexta-feira", "Sábado");
var meses = new Array("Janeiro",
  "Fevereiro", "Março", "Abril", "Maio",
  "Junho", "Julho", "Agosto", "Setembro",
  "Outubro", "Novembro", "Dezembro");
return(semana[dt.getDay()] + 
  ", " + dt.getDate() + " de " + 
  meses[dt.getMonth()] + " de " + dt.getFullYear());
}