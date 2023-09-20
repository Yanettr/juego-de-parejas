// Escucha el evento DOMContentLoaded para que el código se ejecute una vez que la página haya cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene todas las cartas del juego
    const cards = document.querySelectorAll('.card');

    // Agrega un evento click a cada carta
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Voltea la carta
            this.classList.toggle('flipped');

            // Guarda la carta en la variable tar_1 o tar_2, dependiendo de si está volteada
            if (this === tar_1) {
                return;
            } else if (!tar_1) {
                tar_1 = this;
            } else if (tar_2) {
                // Si hay dos cartas volteadas, comprueba si son iguales
                const img1 = tar_1.querySelector('img');
                const img2 = tar_2.querySelector('img');

                if (img1.src === img2.src) {
                    // Si las cartas son iguales, marca ambas cartas como correctas
                    tar_1.classList.add('correct');
                    tar_2.classList.add('correct');

                    // Restablece las variables tar_1 y tar_2
                    tar_1 = null;
                    tar_2 = null;
                } else {
                    // Si las cartas no son iguales, voltéalas de nuevo
                    tar_1.classList.remove('flipped');
                    tar_2.classList.remove('flipped');

                    // Restablece las variables tar_1 y tar_2
                    tar_1 = null;
                    tar_2 = null;
                }
            } else {
                tar_2 = this;
            }
        });
    });
});
