//DOM, ESTÁ PROCURANDO ARQUIVOS PRESENTE DENTRO DO HTML PARA CONSEGUIR LOCALIZAR/ALTERAR TUDO QUE CONTÉM NELE.

const clicar = document.querySelector('#tentar')
const randomNumber = Math.round(Math.random() * 10)
const again = document.querySelector('#again')

let attempts = 1

//EVENTO ESTÁ CRIANDO UM EVENTO PARA REALIZAR ALGUMA FUNÇÃO, COMO EH O CASO DE BAIXO, ONDE EU ESTOU REALIZANDO O CLICK PARAM REALIZAR A FUNÇÃO
clicar.addEventListener('click',rodar)
again.addEventListener('click',reset)


function rodar(event){ 
  event.preventDefault()
  const input = document.querySelector('#inputNumber')
 
  if(Number(input.value) == randomNumber){
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    
    document.querySelector(".screen2 h2").innerText = `acertou em ${attempts} tentativas`
  }
  
  input.value = ""
  attempts++
  
}

function reset(){
  document.querySelector(".screen2").classList.add("hide")
  document.querySelector(".screen1").classList.remove("hide")
  attempts = 1
  
}