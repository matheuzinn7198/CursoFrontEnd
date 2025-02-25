//declaração de um array "[]"
let array = []; //array dinamico

//tipos de arrays
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "Caixa", "Meia"];
let arrayMisto = [1,"José",true];

// tamanho de um array (lenght)
console.log(arrayNumeros.length); //9

// acessar um elemento do array (index)
console.log(arrayTexto[1]); // posição-1

//adicionar elementos em um array
//- no começo (unshift)
arrayTexto.unshift("Tenis");
console.log(arrayTexto);

//no fim (push)
arrayTexto.push("Chinelo");
console.log(arrayTexto);

//trocar um valor
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

//Remover Elementos do Array

//no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);

//no final (pop)
arrayTexto.pop();
console.log(arrayTexto);

//percorrer um Array (laço de repatição) - 
//percorrer o array de números
for(let i =0;i<arrayNumeros.length;i++){
    console.log("Índice["+i+"]="+[arrayNumeros[i]]);
}