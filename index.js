var setaDireita = window.document.getElementById("seta-direita")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    bruna.style = "display: flex"
    leonardo.style = ":display:none"
    setaDireita.style = "display: flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}