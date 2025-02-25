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

//forEach
arrayTexto.forEach(elemento => {
    console.log(elemento)
});

//Métodos Úteis

//IndexOf
console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 (elemento inexistente)

//Splice (remover o elemento da posição)
arrayMisto.splice(2,1); 
console.log(arrayMisto);

//Operações avaçadas de Arrays
// map - novos valores
let valores = [10, 20, 30, 40, 50];
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter - comparação
let valoresFilter = valores.filter(x => x>25);
console.log(valoresFilter);

//desafio (filtro x<35) && (x*3) == [30, 60, 90]

let valoresDesafio = [10, 20, 30];
let valoresTriplo = valores.map(x => x*3);
console.log(valoresTriplo);

let valoresDesafioFilter = valores.filter(x => x<35);
console.log(valoresFilter);

//reduce ([] -> let x)
let soma = valores.reduce((x,y) => x+y);
console.log(soma);

//sort (organizar/ordenado)
let aleatorio = [7, 4, 2, 9, 1, 5, 8, 3, 6];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);