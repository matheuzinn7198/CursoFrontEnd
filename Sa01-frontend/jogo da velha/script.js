// Seleciona os elementos do DOM
const celulas = document.querySelectorAll('.celula');
const mensagem = document.getElementById('mensagem');
const botaoReiniciar = document.getElementById('reiniciar');
const placarX = document.getElementById('placarX');
const placarO = document.getElementById('placarO');

// Variáveis de controle
let jogadorAtual = 'X';             // Começa com o jogador humano
let jogoAtivo = true;              // Controla se o jogo está em andamento
let estadoJogo = Array(9).fill(''); // Representa o tabuleiro
let placarJogadorX = 0;
let placarJogadorO = 0;
let dificuldade = 'dificil';        // Pode ser 'facil', 'medio' ou 'dificil'

// Combinações vencedoras do jogo da velha
const combinacoesVitoria = [
  [0,1,2],[3,4,5],[6,7,8],          // Linhas
  [0,3,6],[1,4,7],[2,5,8],          // Colunas
  [0,4,8],[2,4,6]                   // Diagonais
];

// Verifica se há um vencedor ou empate
function checarVitoria() {
  for (const [a, b, c] of combinacoesVitoria) {
    if (estadoJogo[a] && estadoJogo[a] === estadoJogo[b] && estadoJogo[a] === estadoJogo[c]) {
      jogoAtivo = false;

      // Atualiza placar e mensagem
      if (estadoJogo[a] === 'X') placarX.textContent = ++placarJogadorX;
      else placarO.textContent = ++placarJogadorO;

      mensagem.textContent = `Jogador ${estadoJogo[a]} venceu!`;
      return true;
    }
  }

  // Verifica empate
  if (!estadoJogo.includes("")) {
    jogoAtivo = false;
    mensagem.textContent = "Empate!";
    return true;
  }

  return false;
}

// Verifica o vencedor (usado pelo algoritmo Minimax)
function verificarVencedor(tabuleiro) {
  for (const [a, b, c] of combinacoesVitoria)
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c])
      return tabuleiro[a];
  return null;
}

// Algoritmo Minimax: calcula a melhor jogada para a máquina
function minimax(tabuleiro, profundidade, jogador) {
  const vencedor = verificarVencedor(tabuleiro);
  if (vencedor) return vencedor === 'O' ? 1 : -1;
  if (!tabuleiro.includes('')) return 0; // Empate

  const movimentos = tabuleiro.map((v, i) => v === '' ? i : -1).filter(i => i !== -1);
  let melhor = jogador === 'O' ? -Infinity : Infinity;

  for (const i of movimentos) {
    tabuleiro[i] = jogador;
    const pontuacao = minimax(tabuleiro, profundidade + 1, jogador === 'O' ? 'X' : 'O');
    tabuleiro[i] = '';
    melhor = jogador === 'O' ? Math.max(pontuacao, melhor) : Math.min(pontuacao, melhor);
  }

  return melhor;
}

// Executa a jogada da máquina com base na dificuldade
function jogadaMaquina() {
  const movimentos = estadoJogo.map((v, i) => v === '' ? i : -1).filter(i => i !== -1);
  let movimento;

  if (dificuldade === 'facil') {
    // Jogada aleatória
    movimento = movimentos[Math.floor(Math.random() * movimentos.length)];
  } else if (dificuldade === 'medio') {
    // Tenta bloquear ou vencer, senão joga aleatoriamente
    movimento = movimentos.find(i => {
      estadoJogo[i] = 'O';
      const venceu = checarVitoria();
      estadoJogo[i] = '';
      return venceu;
    }) ?? movimentos[Math.floor(Math.random() * movimentos.length)];
  } else {
    // Dificuldade difícil: usa Minimax
    let melhorPontuacao = -Infinity;
    for (const i of movimentos) {
      estadoJogo[i] = 'O';
      const pontuacao = minimax(estadoJogo, 0, 'X');
      estadoJogo[i] = '';
      if (pontuacao > melhorPontuacao) {
        melhorPontuacao = pontuacao;
        movimento = i;
      }
    }
  }

  // Executa a jogada escolhida
  estadoJogo[movimento] = 'O';
  celulas[movimento].textContent = 'O';

  // Verifica se venceu; senão passa para o jogador
  if (!checarVitoria()) jogadorAtual = 'X';
}

// Quando o jogador clica em uma célula
function cliqueNaCelula(e) {
  const index = e.target.dataset.index;

  if (!jogoAtivo || estadoJogo[index] || jogadorAtual !== 'X') return;

  estadoJogo[index] = 'X';
  e.target.textContent = 'X';

  if (!checarVitoria()) {
    jogadorAtual = 'O';
    setTimeout(jogadaMaquina, 500); // Espera 0.5s para a IA jogar
  }
}

// Reinicia o jogo
function reiniciarJogo() {
  jogadorAtual = 'X';
  jogoAtivo = true;
  estadoJogo = Array(9).fill('');
  celulas.forEach(c => c.textContent = '');
  mensagem.textContent = '';
}

// Adiciona os eventos nas células e no botão de reinício
celulas.forEach(celula => celula.addEventListener('click', cliqueNaCelula));
botaoReiniciar.addEventListener('click', reiniciarJogo);
