
function moverCirculo(Event) {
    const x = Event.x ;
    const y = Event.y ;

    const circulo = document.querySelector('.circulo')

    circulo.style.top = y + 'px';
    circulo.style.left = x + 'px';
}

window.addEventListener('mousemove', moverCirculo);