var nome ="Jose Vitor";
var cargo = "desenvolvedor";

var nomeHtml= document.getElementById("nome-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHTML(nome){

    nomeHtml.innerHTML = nome;
}

function logarNome() {
    console.log(nome);
}


function clickNoProjeto(){
    console.log("clicou no botão projetos");
    texto2.style.display="block";
    texto1.style.display="none";
}
function clicknoSobre(){
    console.log("clicou no botão sobre");
    texto1.style.display="block";
    texto2.style.display=("none");
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);
