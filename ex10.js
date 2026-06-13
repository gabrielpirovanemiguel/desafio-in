//As funções estão printando tando com o alert tanto no console
import printConsoleScreen from "./printConsoleScreen.js";
let jogadores = [];
let rodando = true;
while (rodando) {
  const opcao = prompt('Sistema gerenciador de jogadores\nEscolha uma opção para prosseguir:\n1-Adicionar jogador\n2-Buscar jogador por posição\n3-Listar time\n4-Calcular pontuação média\n5-Sair');
  let cabecalho;
  switch (opcao) {
    case '1':
      cabecalho = 'Adicionando jogador...\n';
      const nome = prompt(`${cabecalho}Digite o nome do jogador: `);
      let idade;
      do {
        idade = parseInt(prompt(`${cabecalho}Digite a idade do jogador: `));
      } while (isNaN(idade) || idade < 0);
      const posicao = prompt(`${cabecalho}Digite a posição do jogador: `).toLowerCase().trim();
      let pontuacao;
      do {
        pontuacao = parseInt(prompt(`${cabecalho}Digite a pontuação do jogador: `));
      } while (isNaN(pontuacao) || pontuacao < 0);
      adicionarJogador(jogadores, nome, idade, posicao, pontuacao);
      break
    case '2':
      cabecalho = 'Buscando jogadores por posição...\n';
      const posicaoDesejada = prompt(`${cabecalho}Digite uma posição para ser buscada: `).toLowerCase().trim();
      const jogadoresPosicao = buscarPorPosicao(jogadores, posicaoDesejada);
      if (jogadoresPosicao.length === 0) {
        imprimirConsoleTela(`Não há jogadores na posição ${posicaoDesejada}.`)
        break
      }
      listarTime(jogadoresPosicao, `Todos os jogadores na posição de "${posicaoDesejada}":\n`);
      break
    case '3':
      jogadores.length !== 0 ? listarTime(jogadores, 'Todos os jogadores do time:\n') : imprimirConsoleTela('Não há jogadores cadastrados.');
      break
    case '4':
      jogadores.length !== 0 ? imprimirConsoleTela(`A pontuação média do time é ${calcularPontuacaoMedia(jogadores)}`) : imprimirConsoleTela('Não há jogadores cadastrados.');
      break
    case '5':
      rodando = false;
      break
    default:
      imprimirConsoleTela('Opção inválida. Tente novamente.');
      break
  }
}

function adicionarJogador(jogadores, nome, idade, posicao, pontuacao) {
  jogadores.push({nome, idade, posicao, pontuacao })
};

function buscarPorPosicao(jogadores, posicao) { 
  return jogadores.filter(jogador => jogador.posicao === posicao); 
};

function listarTime(jogadores, mensagemInicial) {
  let jogadoresString = `${mensagemInicial}`;
  console.log(mensagemInicial);
  jogadores.forEach(jogador => {
    let line = `${jogador.nome} | Idade: ${jogador.idade} | Posição: ${jogador.posicao} | Pontuação: ${jogador.pontuacao}`
    jogadoresString += `${line}\n`;
    console.log(line);
  });
  alert(jogadoresString);
};

function calcularPontuacaoMedia(jogadores) {
  let soma = 0;
  let contagemJogadores = 0;
  jogadores.forEach(jogador => {
    soma += jogador.pontuacao;
    contagemJogadores ++;
  })
  return (soma / contagemJogadores).toFixed(2);
};

//Renomeando função "printConsoleScreen" para "imprimirConsoleTela" para manter o padrão em pt-br
function imprimirConsoleTela(texto) {
  printConsoleScreen(texto);
};

