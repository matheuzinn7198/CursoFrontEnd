
function MudarTitulo() {
    let h1 = document.querySelector("h1");
    h1.innerText = "Novo Titulo";
}

function MudarParagrafo() {
    let p = document.querySelector("p");
    p.innerText = "Novo Exemplo de Paragrafo";
}

function MudarCor() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

titulo.classList.add("descricao");

document.querySelector(".descricao").style.color = "red"