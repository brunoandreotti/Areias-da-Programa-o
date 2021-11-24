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
  1 - Eu agradecia o feedback e perguntaria quais pontos a pessoa acha que eu poderia melhorar!
  2 - Eu ficaria brava e falaria que o meu trabalho está perfeito e que não preciso de opinião de ninguém!
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      
      'Você respondeu corretamente a pergunta da Borboleta do Feedback!'
    )
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert(
      
      'Você errou a resposta e a Borboleta do Feedback te condenou à nunca conseguir melhorar seus trabalhos por não aceitar feedbacks!'
    )
    redirecionarParaFase(escolha)
  } else {
    alert('Selecione uma alternativa válida!')
  }
}
