var pergunta = document.querySelectorAll('.pergunta');
var resposta = document.querySelectorAll('.resposta')

pergunta.addEventListener("click", mostraEsconde());


function mostraEsconde() {
    if (resposta.style.display == 'none') {
     resposta.style.display = 'block';
     /*função para girar icone*/
     console.log("foi");
    } else {
        resposta.style.display = 'none';
        /*função para voltar a esconder*/
        console.log("voltou");
    }
};

/*exemplo para testar modificação
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    var botao = document.getElementById("meuBotao");

    if(display == "none") {
        document.getElementById(el).style.display = 'block';
        botao.innerHTML = "Esconder";
    }
    else {
        document.getElementById(el).style.display = 'none';
        botao.innerHTML = "Mostrar";
    }
}*/