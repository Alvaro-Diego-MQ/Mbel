document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("content").style.display = "block"; // Muestra el mensaje
    document.getElementById("startBtn").style.display = "none"; // Oculta el botón
    document.getElementById("youtubeAudio").style.width = "1px"; // Activa la música
    document.getElementById("youtubeAudio").style.height = "1px"; 
    startHearts(); // Lanza la animación de corazones flotando
});

// Función para crear corazones flotando
function startHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        let size = Math.random() * 20 + 10; // Tamaño aleatorio
        heart.style.fontSize = size + "px";
        heart.style.left = Math.random() * 100 + "vw"; // Posición aleatoria
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Velocidad aleatoria

        setTimeout(() => { heart.remove(); }, 5000);
    }, 500);
}
