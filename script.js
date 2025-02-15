function startValentine() {
    document.getElementById("startButton").style.display = "none"; // Oculta el botón
    document.getElementById("container").style.display = "block"; // Muestra el corazón y mensaje

    let audio = document.getElementById("loveSong");
    audio.play().catch(error => console.log("Error al reproducir el audio:", error));
}