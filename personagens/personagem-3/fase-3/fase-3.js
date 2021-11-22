// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.assign('./game-over.html')
  } else if (numEscolha == 2) {
    window.location.replace('./fase-3.2.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - Muito fácil! Basta usar a propriedade 'display: flex-item' no item que você quer transformar em flex-item.
  2 - Não há necessidade de definir! Todo o elemento que está dentro de um pai que possui 'display: flex' já automaticamente um flex-item.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você errou! O Mago do CSS te amaldiçoou e você está fadado a posicionar elementos somente usando margin'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert('Você provou sua inteligência para o Mago do CSS!')
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
