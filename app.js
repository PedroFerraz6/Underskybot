

var vida = 20
var mecanico = 3
var magico = 6


var nivel = 1
var dificuldade
var nivelDificuldade

var inimigo
const vidaInimigo = [5, 10, 50, 100, 1000]

var iniciar = 0


function audio() {
    const audio = document.querySelector('audio')
    audio.play()
}

//altera o texto em html
function texto(tag, txt) {
    let campo = document.querySelector(tag);
    campo.innerHTML = txt;
}

texto('p', 'Bem-Vindo ao Underskybot, caso queria fazer o tutorial digite tutorial, caso queira jogar apenas aperte o botão. Digite tudo em minusculo e sem acentos.');
texto('button', 'Ação')

//botao da ação
function botao() {
    let acao = document.querySelector('input').value

    if (acao == 'tutorial' && iniciar == 0) {
        texto('p', 'Era uma vez um pequeno robô (ele é representado pelo número 1) que vivia em uma ilha voadora segura ele tem o sonho de cair até chegar a superfície da terra e explorar o mundo, porem a terra é habitada por enormes criaturas sem fim (representado por outros números) que tem fome de eletricidade e fariam de tudo para destruir e sugar a energia do pequeno robô. Um asteroide um dia cai na ilha voadora, e dentro dele tinha uma espada magica que absorve a vitalidade das criaturas, assim tornando o robô ainda mais forte a cada inimigo morto.     Então o robô pula de sua ilha para explorar o mundo e limpar a superfície de todas as enormes criaturas perigosas que ameaçam os vilarejos de robôs nas ilhas voadoras. Digite lutar para encontrar algum inimigo.')
        audio()

    } else if ((acao == '' || acao == 'jogar') && iniciar == 0) {
        texto('p', 'Digite o nivel de dificuldade que deseja, facil, medio, dificil')
        iniciar = 1

    } else if (iniciar == 1) {

        if (acao == 'facil') {
            texto('p', 'facil, aperte o botao para continuar')
            dificuldade = 1
            iniciar = 2

        } else if (acao == 'medio') {
            texto('p', 'medio, aperte o botao para continuar')
            dificuldade = 2
            iniciar = 2

        } else if (acao == 'dificil') {
            texto('p', 'dificil, aperte o botao para continuar')
            dificuldade = 3
            iniciar = 2
        }

    } else if (iniciar == 2) {
        audio()
        texto('p', 'Digite lutar para achar um inimigo')
        iniciar = 3
    }

    if (acao == 'lutar' && iniciar == 3) {

        gerarDificuldade()
        inimigo = gerarInimigo()
        texto('p', 'Seu inimigo é: ' + inimigo + ', aperte o botão para continuar')
        iniciar = 4

        inimigo = vidaInimigo[inimigo - 1]

        alert(inimigo)

    } else if (iniciar == 4) {
        texto('p', 'Digite atacar para golpear o inimigo')

        if (acao == 'atacar') {
            texto('p', 'Digite mecanico ou magico para desferir o respectivo golpe.')
        }

        if (acao == 'mecanico') {
            texto('p', 'Você desferiu um golpe mecanico.')
            alert(golpeMecanico())
        }

    }
}

//golpe mecanico
function golpeMecanico() {
    let golpe = parent(Math.random() * 2 + 1)

    if (golpe == 1) {
        return 'Acertou'
    } else {
        return 'Você errou'
    }
}

//gerar dificuldade
function gerarDificuldade() {
    nivelDificuldade = nivel * dificuldade
}

// gera o inimigo
function gerarInimigo() {
    let num = parseInt(Math.random() * 10)

    if (num > nivelDificuldade) {
        return gerarInimigo()

    } else if (num == 0) {
        return 1

    } else {
        return num
    }
}

