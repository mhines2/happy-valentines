document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const responseMessage = document.getElementById("response-message");
    const buttonsContainer = document.querySelector(".buttons");

    // "Yes" button click event
    yesBtn.addEventListener("click", function () {
        responseMessage.textContent = "Yay! 💖 I love you more! 😘";
        buttonsContainer.style.display = "none"; // Hide buttons
        const img = document.createElement("img");
        img.src = "cat-hearts.gif"; // Path to the gif
        img.alt = "Cat with hearts";
        img.style.display = "block";
        img.style.margin = "20px auto";
        document.body.appendChild(img); // Add gif to the center of the screen
    });

    // Function to move the "No" button to a random position
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
