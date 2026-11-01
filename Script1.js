document.querySelector('.formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
    this.reset()
});
// --- EFECTO DE CAÍDA DE PÉTALOS DE CEREZO --- //
function crearPetalo() {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo-sakura');

    // Tamaño aleatorio para variar la profundidad
    const tamanio = Math.random() * 12 + 8; // entre 8px y 20px
    petalo.style.width = `${tamanio}px`;
    petalo.style.height = `${tamanio * 1.4}px`;

    // Posición horizontal de inicio aleatoria
    petalo.style.left = `${Math.random() * 100}vw`;

    // Duración de caída aleatoria (entre 6s y 11s)
    const duracion = Math.random() * 5 + 6;
    petalo.style.animationDuration = `${duracion}s`;

    document.body.appendChild(petalo);

    // Eliminar el pétalo al finalizar la animación para no saturar la memoria
    setTimeout(() => {
        petalo.remove();
    }, duracion * 1000);
}

// Crear un pétalo nuevo cada 400 milisegundos
setInterval(crearPetalo, 400); 