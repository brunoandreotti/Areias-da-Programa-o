// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('./game-over.html')
  } else if (numEscolha == 2) {
    window.location.assign('../fase-2/fase-2.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - Seguir seu caminho de acordo com o mapa.
  2 - Ir até a possível miragem.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você seguiu seu trajeto e mesmo com o mapa não encontrou seu destino e se perdeu no deserto.'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'Você vai até a figura misteriosa, chegando lá percebe que se trata de um dos Senhores da Programação, O Ferreiro do HTML.'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
