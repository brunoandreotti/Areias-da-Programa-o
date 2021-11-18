// VARIBLES

var button = document.querySelector('#button')

// EVENTS

button.addEventListener('click', selecionarPersonagem)

// FUNCTIONS

// function redirecionarParaFase(numEscolha) {
//   if (numEscolha == 1) {
//     window.location.href = './personagens/personagem-1/fase-1.html'
//   } else if (numEscolha == 2) {
//     window.location.href = './personagens/personagem-2/fase-1.html'
//   } else {
//     window.location.href = './personagens/personagem-3/fase-1.html'
//   }
// }


function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.assign('./personagens/personagem-1/fase-1.html')
  } else if (numEscolha == 2) {
    window.location.assign('./personagens/personagem-2/fase-1.html')
  } else {
    window.location.assign('./personagens/personagem-3/fase-1.html')
  }
}


function selecionarPersonagem(event) {
  event.preventDefault()
  var escolha = parseInt(
    prompt(`Escolha seu personagem:
  1 - Estudante HTML e CSS
  2 - Estudante Soft Skills
  3 - Estudante GIT e JavaScript
  Obs: Escolha baseado no número do personagem!`)
  )

  if (escolha == 1) {
    alert('Você escolheu o Estudante de HTML e CSS')
    redirecionarParaFase(escolha)
  } else if (escolha == 2) {
    alert('Você escolheu o Estudante de Soft Skills')
    redirecionarParaFase(escolha)
  } else if (escolha == 3) {
    alert('Você escolheu o Estudante de GIT e JavaScript')
    redirecionarParaFase(escolha)
  } else {
    alert('Escolha um personagem válido!')
  }
}
