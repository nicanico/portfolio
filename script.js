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

// animações de scroll
window.sr = ScrollReveal({ reset: true })

sr.reveal('.description__text', {
    rotate: { x: 90, y: 0, z: 0 },
    duration: 2000
})
sr.reveal('.skills__icons', {
    rotate: { x: 90, y: 0, z: 0 },
    duration: 2000
})
sr.reveal('.contato-container', {
    rotate: { x: 90, y: 0, z: 0 },
    duration: 2000
})
sr.reveal('.social-container', {
    rotate: { x: 90, y: 0, z: 0 },
    duration: 2000
})
sr.reveal('.link-container', {
    rotate: { x: 90, y: 0, z: 0 },
    duration: 2000
})


typeWriter(nome)
