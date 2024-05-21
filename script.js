const casas = document.querySelectorAll('.casa');
let jogadorAtual = 1; // 1: Jogador 1, 2: Jogador 2
let jogoEmAndamento = true;
let vencedor = null;

casas.forEach(casa => {
    casa.addEventListener('click', () => {
        if (jogoEmAndamento && !casa.textContent) {
            marcarCasa(casa, jogadorAtual);
            verificarVencedor();
            trocarJogador();
        }
    });
});

function marcarCasa(casa, jogador) {
    const simbolo = jogador === 1 ? 'X' : 'O';
    casa.textContent = simbolo;
    casa.classList.add(`jogador${jogador}`);
}

function verificarVencedor() {
    const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const linha of linhas) {
        const [a, b, c] = linha;
        if (casas[a].textContent === casas[b].textContent && casas[a].textContent === casas[c].textContent && casas[a].textContent) {
            vencedor = jogadorAtual;
            jogoEmAndamento = false;
            exibirMensagem(`Jogador ${vencedor} venceu!`);
            return;
        }
    }

    if (!casas.some(casa => !casa.textContent)) {
        jogoEmAndamento = false;
        exibirMensagem('Empate!');
    }
}

function trocarJogador() {
    jogadorAtual = jogadorAtual === 1 ? 2 : 1;
}

function exibirMensagem(mensagem) {
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = mensagem;
}
