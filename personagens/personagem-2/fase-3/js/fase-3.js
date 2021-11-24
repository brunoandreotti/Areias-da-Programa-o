// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.assign('../html/game-over.html')
  } else if (numEscolha == 2) {
    window.location.replace('../html/fase-3.2.html')
  }
}

function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Faça sua escolha:
  1 - Eu procrastino e só começo a fazer o trabalho 3 dias antes do prazo de entrega.
  2 - Eu planejo muito bem meu tempo e vou fazendo um pouco do trabalho a cada dia durante o prazo de entrega.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você errou a resposta do Monstro do Pânico e ele te acompanhará na sua procrastinação para sempre!'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert('Você acertou a resposta da pergunta do Mostro do Pânico!')
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
