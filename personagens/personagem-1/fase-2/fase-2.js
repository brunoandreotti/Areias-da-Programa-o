// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.assign('./fase-2.1.html')
  } else if (numEscolha == 2) {
    window.location.assign('./game-over.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - Seguir seu caminho de acordo com o mapa.
  2 - Não tem diferença! São jeitos diferentes de escrever a mesma tag.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você seguiu seu trajeto e mesmo com o mapa não encontrou seu destino e se perdeu no deserto.'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'Você errou! E O Ferreiro do HTML te condenou a escrever HTML sem nenhuma semântica para o resto da vida!'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
