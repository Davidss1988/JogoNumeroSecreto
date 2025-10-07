//let titulo = document.querySelector('h1');// pegando o h1 em html, e depois selecionar um texto
//titulo.innerHTML = 'Jogo do Número Secreto';//colando um texto em let titulo

//let paragrafo = document.querySelector('p');//selecionando o paragráfo do documento
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//criando a valreavel numero secreto e chamando a nossa função que gera o numero apeatorio
// Criando a variável do número secreto e chamando a função que o gera
// ======================
// CONFIGURAÇÃO INICIAL
// ======================
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// ======================
// FUNÇÕES DE EXIBIÇÃO
// ======================
function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// ======================
// FUNÇÃO PRINCIPAL DO JOGO
// ======================
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', '🎯 Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagem);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let dica = chute > numeroSecreto ? 'menor ⬇️' : 'maior ⬆️';
        exibirTextoNaTela('p', `O número secreto é ${dica}`);
        tentativas++;
        limparCampo();
    }
}

// ======================
// FUNÇÃO GERAR NÚMERO ALEATÓRIO (SEM REPETIR)
// ======================
function gerarNumeroAleatorio() {
    if (listaDeNumerosSorteados.length === numeroLimite) {
        // se todos já foram sorteados, limpa a lista
        listaDeNumerosSorteados = [];
    }

    let numeroEscolhido;
    do {
        numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    } while (listaDeNumerosSorteados.includes(numeroEscolhido));

    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log("Números já sorteados:", listaDeNumerosSorteados);
    return numeroEscolhido;
}

// ======================
// OUTRAS FUNÇÕES
// ======================
function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// ======================
// INÍCIO DO JOGO
// ======================
exibirMensagemInicial();
