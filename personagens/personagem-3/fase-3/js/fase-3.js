// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.assign('../html/fase-3.2.html')
  } else if (numEscolha == 2) {
    window.location.replace('../html/game-over.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - A palavra reservada 'for' é utilizada para criar laços de repetição.
  2 - A palavra reservada 'for' é utilizada para criar condições.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você acertou a resposta da pergunta do Golem do JavaScript!'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert('Você errou a resposta e o Golem do JavaScript te condenou a nunca conseguir fazer laços de repetição!')
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
