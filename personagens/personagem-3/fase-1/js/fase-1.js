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
  1 - Volta para a cidade para se reidratar e voltar à buscar outro dia.
  2 - Continuar a busca no calor do deserto por mais algum tempo para tentar encontrar a torre.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Ao voltar você começa a pensar que tudo não passa de um conto e desiste de procurar o Oásis.'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      'Você anda por mais alguns minutos e avista uma torre no horizonte, sem pensar duas vezes você entra na torre, ao entrar você se depara com O Gato Do Git.'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
