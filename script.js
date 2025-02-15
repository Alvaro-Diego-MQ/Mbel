document.addEventListener("DOMContentLoaded", function() {
    // Desvanecer el mensaje "De Diego ❤️"
    setTimeout(() => {
        document.getElementById("introMessage").style.opacity = "0";
    }, 2000);

    // Evento para el botón de inicio
    document.getElementById("startBtn").addEventListener("click", function() {
        document.getElementById("content").style.display = "block";
        document.getElementById("startScreen").style.display = "none";
        startFloatingHearts();
    });
});

// Función para agregar corazones flotando
function startFloatingHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart-float");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Entre 3 y 6 segundos
        document.body.appendChild(heart);

        // Eliminar corazones después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}
