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

    // Function to move the "No" button slightly without going off-screen
    function moveNoButton() {
        const maxMove = 50; // Maximum pixels the button can move per hover
        const rect = noBtn.getBoundingClientRect(); // Get button's current position

        let newX = rect.left + (Math.random() * maxMove * 2 - maxMove); // Move left or right
        let newY = rect.top + (Math.random() * maxMove * 2 - maxMove); // Move up or down

        // Ensure button stays within the viewport
        newX = Math.max(0, Math.min(window.innerWidth - noBtn.clientWidth, newX));
        newY = Math.max(0, Math.min(window.innerHeight - noBtn.clientHeight, newY));

        noBtn.style.position = "absolute"; // Ensure the button is positioned absolutely
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    }


    // "No" button hover event (moves away)
    noBtn.addEventListener("mouseover", moveNoButton);

    // "No" button click event (moves away)
    noBtn.addEventListener("click", moveNoButton);
});
