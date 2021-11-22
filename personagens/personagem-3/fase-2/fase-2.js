// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.assign('./fase-2.1.html')
  } else if (numEscolha == 2) {
    window.location.replace('./game-over.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - Muito fácil!. Git commit -m 'Mensagem-do-commit'
  2 - Fácil de mais!. Git comment -m 'Mensagem-do-comment'
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      
      'Você acertou a brincadeira do Gato do GIT'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      
      'Você errou e o Gato do GIT te almaldiçoou! Você foi condenado a nunca conseguir versionar seus códigos.'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
