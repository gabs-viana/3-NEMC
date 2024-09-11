const imagem = document.getElementById('imagem')

const botao1 = document.getElementById('botao1')
const botao2 = document.getElementById('botao2')
const botao3 = document.getElementById('botao3')
const botao4 = document.getElementById('botao4')
const botao5 = document.getElementById('botao5')

function trocarImagem(op){
    imagem.src = op;
}
botao1.addEventListener('click', function(){
    trocarImagem('imgs/imagem1.jpg');
})
botao2.addEventListener('click', function(){
    trocarImagem('imgs/imagem2.jpg');
})
botao3.addEventListener('click', function(){
    trocarImagem('imgs/imagem3.jpg');
})
botao4.addEventListener('click', function(){
    trocarImagem('imgs/imagem4.png');
})
botao5.addEventListener('click', function(){
    trocarImagem('imgs/imagem5.png');
})