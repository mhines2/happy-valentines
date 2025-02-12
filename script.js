document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const responseMessage = document.getElementById("response-message");
    const buttonsContainer = document.querySelector(".buttons");
    const bgMusic = document.getElementById("bg-music");
    const originalMessage = document.querySelector("h1");

    // Ensure the audio is loaded and ready to play
    bgMusic.load();

    // "Yes" button click event
    yesBtn.addEventListener("click", function () {
        responseMessage.textContent = "Yay! 💖 I love you more! 😘";
        buttonsContainer.style.display = "none"; // Hide buttons
        originalMessage.style.display = "none"; // Hide original message
        const img = document.createElement("img");
        img.src = "cat-hearts.gif"; // Path to the gif
        img.alt = "Cat with hearts";
        img.style.display = "block";
        img.style.margin = "20px auto";
        document.body.appendChild(img); // Add gif to the center of the screen
        bgMusic.play().catch(error => {
            console.error("Failed to play audio:", error);
        }); // Play background music
    });

    // Function to move the "No" button to a random position within the viewport
    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // "No" button hover event (moves away)
    noBtn.addEventListener("mouseover", moveNoButton);

    // "No" button click event (moves away)
    noBtn.addEventListener("click", moveNoButton);
});
