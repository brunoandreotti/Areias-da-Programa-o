// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.replace('../html/game-over.html')
  } else if (numEscolha == 2) {
    window.location.assign('../../fase-2/html/fase-2.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - Voltar para o acampamento para se descansar e voltar à buscar outro dia.
  2 - Entrar na caverna com a certeza que encontrou o que procurava.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você volta para o acampamento mas quando tenta encontrar a caverna novamente, ela foi soterrada por uma tempestade de areia.'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'Você entra na caverna escura, ao acender sua tocha você se depara com uma gigante borboleta e se da conta que se trata da Borboleta do Feedback!'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
