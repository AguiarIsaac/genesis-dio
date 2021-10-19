//console.log(Math.floor(Math.random() * (0,10) + 0))
let ordem = 0
let corClicada = 0
let score = 0

const green = document.querySelector('.green'); // 0
const red = document.querySelector('.red'); // 1
const yellow = document.querySelector('.yellow'); //2
const blue = document.querySelector('.blue'); // 3

const btn = document.querySelector('#btn-start')

function sequenciaCores() {
  if(ordem == 0) {
    green.classList.add('selected')
    setTimeout(() => { green.classList.remove('selected')}, 500)
    } else if (ordem == 1){
    red.classList.add('selected')
    setTimeout(() => { red.classList.remove('selected')}, 500)
    } else if (ordem == 2) {
    yellow.classList.add('selected')
    setTimeout(() => { yellow.classList.remove('selected')}, 500)
    } else if (ordem == 3) {
    blue.classList.add('selected')
    setTimeout(() => { blue.classList.remove('selected')}, 500)
  }
}

function sorteio() {
  ordem = 0
  ordem = Math.floor(Math.random() * (0, 4) + 0)
  sequenciaCores()
}

function comparaResultado(Nsorteado, click) {
  if(Nsorteado != click) {
    window.alert('Errrrrrrrou!')
    score = 0
  } else {
    score = score + 1
    window.alert(`Acertou mizeravi. SCORE: ${score}`)
  }
}

function click(color) {
  if(color == 0) {
    corClicada = 0
    comparaResultado(ordem, corClicada)
    } else if(color == 1) {
    corClicada = 1
    comparaResultado(ordem, corClicada)
    } else if(color == 2) {
    corClicada = 2
    comparaResultado(ordem, corClicada)
    } else if(color == 3) {
    corClicada = 3
    comparaResultado(ordem, corClicada)
  }
}

btn.addEventListener('click', sorteio)

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)