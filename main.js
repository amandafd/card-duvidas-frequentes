var pergunta = document.getElementsByClassName("pergunta");
var i;

for (i=0; i < pergunta.length; i++) {
    pergunta[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var resposta = this.nextElementSibling;
        if (resposta.style.display === "block") {
            resposta.style.display = "none";
        } else {
            resposta.style.display = "block";
        }
    })
}

console.log(pergunta)
