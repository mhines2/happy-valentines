document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const responseMessage = document.getElementById("response-message");
    const buttonsContainer = document.querySelector(".buttons");
    const bgMusic = document.createElement("audio");
    bgMusic.src = "love-song.mp3"; // Path to your romantic music
    bgMusic.id = "bg-music";
    bgMusic.loop = true;
    document.body.appendChild(bgMusic);

    // Create floating hearts container
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts");
    document.body.appendChild(heartsContainer);

    // "Yes" button click event
    yesBtn.addEventListener("click", function () {
        responseMessage.textContent = "Yay! 💖 Can't wait for our special day! 😘";
        buttonsContainer.style.display = "none"; // Hide buttons

        // Add cat gif
        const img = document.createElement("img");
        img.src = "cat-hearts.gif"; // Path to the gif
        img.alt = "Cat with hearts";
        img.style.display = "block";
        img.style.margin = "20px auto";
        img.style.width = "300px"; // Adjust size
        document.body.appendChild(img);

        // Play background music
        bgMusic.play().catch(error => console.log("Autoplay blocked, waiting for user interaction"));

        // Trigger floating hearts
        createHearts();
    });

    // Function to move the "No" button to a random position
    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // "No" button hover & click event (moves away)
    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);

    // Function to create floating hearts
    function createHearts() {
        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            heartsContainer.appendChild(heart);

            // Remove heart after animation ends
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }
});
