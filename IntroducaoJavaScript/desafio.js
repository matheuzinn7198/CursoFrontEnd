// Verificação de Idade
var prompt = require("prompt-sync")();

var idade = prompt("Informe sua idade: ");

if(idade<18){
    console.log("Menor de Idade");
}else if(idade<60){
    console.log("Adulto");
}else{
    console.log("Idoso")
}

// Tabuada do 5

for(let i = 0; i<=20 ; i++){
    console.log("5 x "+i+" = "+(i*5))
}

// Verificação de Números Pares

for(let i = 1 ; i<=20 ; i++){
    //imprimir n° pares
    let resto = (i%2); //Operador % resto da divisão
    if(resto ==0){
     console.log(i);   
    }
}