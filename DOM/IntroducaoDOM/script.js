//Script de Manipulação DOM

//getElementById -> variável Simples
let titulo = document.getElementById("titulo");//html -> id
console.log(titulo); // mostra no console as informações da id
titulo.innerText = "Outro Titulo"; // modificar o conteúdo da id

//getElementByTagName -> variável Vetor(Array)
let paragrafo = document.getElementsByTagName("p"); //html -> "p"
// modificar elemento
paragrafo[0].innerText = "Exemplo de Parágrafo Modificado por DOM";
// modificar style do elemento
paragrafo[1].style.color = "red";

//getElementsByClassName -> variável Vetor(Array)
let descricao = document.getElementsByClassName("descricao");
for(let i = 0; i<descricao.length; i++){
    descricao[i].style.color = "blue";
}

//querySelector -> variável simples -> seleciona o 1°
let p = document.querySelector("p");
//modificação de font
p.style.fontWeight = "bold";

//querySelectorAll -> variável Vetor(Array) -> Selecionar Todos
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => {
    element.style.fontWeight = "bold";
});

//eventos listener(ouvinte)

//
function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

//chamando direto no script o ouvinte
document.getElementById("btnColor").addEventListener("click", OutraCor)
function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}