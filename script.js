document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const responseMessage = document.getElementById("response-message");

    // "Yes" button click event
    yesBtn.addEventListener("click", function () {
        responseMessage.textContent = "Yay! 💖 Can't wait for our special day! 😘";
    });

    // "No" button hover event (moves away)
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});
