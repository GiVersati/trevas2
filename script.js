document.addEventListener("DOMContentLoaded", function() {
    const clickHereButton = document.getElementById("click-here");
    const letterContainer = document.getElementById("letter-container");
    const letter = document.getElementById("letter");
    const textBoxContainer = document.getElementById("text-box-container");
    const audio = document.getElementById("theme-music");

    // Quando o usuário clicar no botão "Clique aqui"
    clickHereButton.addEventListener("click", function() {
        clickHereButton.style.display = "none"; // Esconde o botão
        letterContainer.style.display = "block"; // Exibe a carta fechada
        audio.play(); // Inicia a música
    });

    // Quando o usuário clicar na carta fechada
    letter.addEventListener("click", function() {
        letter.style.display = "none"; // Remove a carta fechada após o clique
        textBoxContainer.style.display = "block"; // Exibe a caixa de texto
    });
});
