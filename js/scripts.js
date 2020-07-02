var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 30;

var CriarMosquitoTempo = 1500
//search pesquisa pelo valor apos o ?
//replace() substitui um caracter, valor por outro desejado

var nivel = window.location.search
    nivel = nivel.replace('?','')

    if(nivel === 'normal'){
        CriarMosquitoTempo = 1500
    }else if(nivel === 'dificil'){
        CriarMosquitoTempo = 1000

    }else if(nivel === 'chucknorris'){
        CriarMosquitoTempo = 750
    }

//verificando tamanho da tela
function AjustaTamanhoJogo(){
altura = window.innerHeight
largura = window.innerWidth
//console.log(largura,altura)
}
AjustaTamanhoJogo()
 var cronometro = setInterval(function(){
      tempo -= 1
      if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(CriarMosquito)
        window.location.href = 'vitoria.html'
      }else{
        document.getElementById('cronometro').innerHTML = tempo
      }
 },1000)

function posicaoRandomica(){
//remover elemento caso exista
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if(vidas > 3){
        window.location.href="fim_de_jogo.html"
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