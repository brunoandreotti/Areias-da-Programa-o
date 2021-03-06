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
  1 - A tag <head> serve para passar informações ao navegador que não serão apresentadas na tela para o usuário, enquanto a tag <header> representar o cabeçalho da página!.
  2 - Não tem diferença! São jeitos diferentes de escrever a mesma tag.
  
  Obs: Selecione baseado no número da escolha!`)
  )

  if (escolha == 1) {
    alert(
      'Você acertou a resposta do questionamento do Ferreiro do HTML!'
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
