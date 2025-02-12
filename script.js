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

    // Function to move the "No" button to a random position within a small range
    function moveNoButton() {
        const x = Math.random() * 50 - 25; // Move within a range of -25px to 25px
        const y = Math.random() * 50 - 25; // Move within a range of -25px to 25px
        const currentLeft = parseInt(noBtn.style.left || 0, 10);
        const currentTop = parseInt(noBtn.style.top || 0, 10);
        noBtn.style.left = `${Math.max(0, Math.min(currentLeft + x, window.innerWidth - noBtn.clientWidth))}px`;
        noBtn.style.top = `${Math.max(0, Math.min(currentTop + y, window.innerHeight - noBtn.clientHeight))}px`;
    }

    // "No" button hover event (moves away)
    noBtn.addEventListener("mouseover", moveNoButton);

    // "No" button click event (moves away)
    noBtn.addEventListener("click", moveNoButton);
});
