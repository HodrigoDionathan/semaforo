const lampada = document.getElementById('lampada');

// Função para alterar a imagem do semáforo
function mudarImagem(cor) {
  lampada.src = `caminho/para/${cor}.png`;
}

function sequenciaSemaforo() {
  // Acende a imagem verde
  mudarImagem('verde');

  setTimeout(() => {
    // Troca para a imagem amarela após 5 segundos
    mudarImagem('amarela');
  }, 5000);

  setTimeout(() => {
    // Troca para a imagem vermelha após mais 3 segundos
    mudarImagem('vermelha');
  }, 8000);

  setTimeout(() => {
    // Retorna para a imagem verde após mais 5 segundos
    mudarImagem('verde');
  }, 13000);
}

// Inicia a sequência quando a página carregar
window.onload = function () {
  sequenciaSemaforo();
  setInterval(sequenciaSemaforo, 18000); // Repete a sequência a cada 18 segundos
};
