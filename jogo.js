let boneco = document.querySelector('.boneco')
let parede = document.querySelector('.parede')
let btnStop = document.querySelector('.btnStop')
let pontos = document.querySelector('.pontos')
let comecar = document.querySelector('.comecar')
let count = 0

let paredeAndando = setInterval(function () {
  if (
    parede.offsetLeft <= 50 &&
    parede.offsetLeft < 20 &&
    boneco.offsetTop > 190
  ) {
    clearInterval(paredeAndando)
    parede.style.left = parede.offsetLeft + 'px'
    parede.classList.remove('andando')
    comecar.style.display = 'block'
    comecar.innerHTML = 'Game Over'
    comecar.addEventListener('click', function () {
      location.reload()
    })
  }
}, 1)

comecar.addEventListener('click', function () {
  let count = 3
  let regressivo = setInterval(function () {
    count = count - 1
    comecar.innerHTML = count
  }, 1000)
  setTimeout(function () {
    parede.classList.add('andando')
    clearInterval(regressivo)
    comecar.style.display = 'none'
  }, 3000)
})

// setInterval(function(){
//     console.log(boneco.offsetTop)
// }, 1);

//Ao clicar na tela o boneco pula
window.addEventListener('click', function () {
  boneco.classList.add('pulando')
  //Apos um tempo o pulo é removido
  setTimeout(function () {
    count = count + 100
    pontos.innerHTML = ''
    pontos.innerHTML = count
    boneco.classList.remove('pulando')
  }, 500)
})
