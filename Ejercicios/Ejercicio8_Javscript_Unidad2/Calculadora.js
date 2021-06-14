// Ingreso de valores
var userName    = prompt("Ingrese Nombre del alumno");
var sumGrade    = 0;

var sumGrade = sumGrade + parseInt(prompt("Ingrese primera nota"));
console.log (`Sumatoria de la 1ra nota: ${sumGrade}`);

var sumGrade = sumGrade + parseInt(prompt("Ingrese segunda nota"));
console.log (`Sumatoria de las 2 notas: ${sumGrade}`);

var sumGrade = sumGrade + parseInt(prompt("Ingrese tercera nota"));
console.log (`Sumatoria de las 3 notas: ${sumGrade}`);

var sumGrade = parseInt(sumGrade/3);
console.log (`Promedio de las 3 notas ${sumGrade}`);

alert (`La nota de ${userName} es ${sumGrade}`)