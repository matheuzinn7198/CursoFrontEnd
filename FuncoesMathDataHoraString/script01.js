//funções Data e Hora
let agora = new Date();

console.log(agora);

console.log(agora.toDateString());

console.log(agora.toLocaleTimeString());

//get
console.log(agora.getFullYear); //mostrar o ano

//set
agora.getFullYear(2030);
console.log(agora.toLocaleDateString()); //25/02/2030


//operações data e hora

let data1 = new Date("2025-02-04");
let data2 = new Date("2025-12-17");

let diferenca = data2-data1;

console.log(diferenca/(1000*60*60*24));//calcular em dias a diferença