'use strict'
const nome = document.querySelector('h1')

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra
        }, 190 * i)
    })

}

typeWriter(nome)