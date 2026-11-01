document.querySelector('.formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
    this.reset()
});
// --- efecto de caida de cerezo --- //
function crearPetalo() {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo-sakura');

    // tamaño aleatorio para variar la profundidad
    const tamanio = Math.random() * 12 + 8; 
    petalo.style.width = `${tamanio}px`;
    petalo.style.height = `${tamanio * 1.4}px`;

    // posicion horizontal de inicio aleatoria
    petalo.style.left = `${Math.random() * 100}vw`;

    // duracion de caida aleatoria 
    const duracion = Math.random() * 5 + 6;
    petalo.style.animationDuration = `${duracion}s`;

    document.body.appendChild(petalo);

    // eliminar el petalo al finalizar la animacion
    setTimeout(() => {
        petalo.remove();
    }, duracion * 1000);
}

// crear un petalo nuevo cada 400 milisegundos
setInterval(crearPetalo, 400); 