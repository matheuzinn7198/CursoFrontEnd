// Introdução JavaScript

//Tipo de Dados(escopo, tipagem)

//tipo-Striing Text //
var nome = "João"; // variavel de escopo global
nome = "José"; // redefinir valor
var nome = "Pedro"; // reeclaração da var

//tipo Number
let idade = 25; // variavel de escopo local
idade = 26; //redefinir valor - ok
// let idade = 30; //erro redeclarar
// const PI = 4.6543; //erro - não pode redeclarar

//tipo Number
const PI = 3.1415; //constante
// PI = 3.876 ; //erro - não pode redefinir

//tipo Boolean
var aprovado = true;

//tipo underfined
var media;

//tipo null - vazio
var info = null;

console.log("Nome: "+nome); // imprimir no Terminal
console.log("Idade: "+idade);
console.log("P: "+PI);    
console.log("Aprovação: "+aprovado);
console.log("Média: "+media);
console.log("Informações: "+info);
