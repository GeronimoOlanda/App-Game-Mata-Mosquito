var altura = 0;
var largura = 0;
vidas = 1

//verificando tamanho da tela
function AjustaTamanhoJogo(){
altura = window.innerHeight
largura = window.innerWidth

//console.log(largura,altura)
}

AjustaTamanhoJogo()

function posicaoRandomica(){
//remover elemento caso exista
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if(vidas > 3){
        alert("parrou")
    }else{
    document.getElementById('v'+vidas).src = "img/imagens/coracao_vazio.png"
    vidas++
}
}


//randomizando as moscas e arredondando
var posicaoX =  Math.floor(Math.random() * largura)-100
var posicaoY = Math.floor(Math.random() * altura)-100

posicaoX = posicaoX < 0?0 : posicaoX
posicaoY = posicaoY < 0?0 : posicaoY

console.log(posicaoX,posicaoY)

//criar o Elemento HTML
//adicionando um filho do elemento no body appendChild()
var mosquito = document.createElement('img');

mosquito.src = 'img/imagens/mosca.png'
mosquito.className  = tamanhoAleatorio() +' '+ ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){ 
    this.remove()
}



document.body.appendChild(mosquito)
tamanhoAleatorio()
ladoAleatorio()
//console.log()
//console.log()
}
posicaoRandomica()

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)
   

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)
  

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
ladoAleatorio()