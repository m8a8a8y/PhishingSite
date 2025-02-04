document.addEventListener("DOMContentLoaded", () => {
    const hackedText = document.getElementById("hacked-text");

    // Typing effect for the main text
    const message = "Gotcha! Think before you click.";
    let index = 0;

    const typeEffect = () => {
        if (index < message.length) {
            hackedText.textContent += message[index];
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed
        }
    };

    hackedText.textContent = ""; // Clear initial text
    typeEffect();

    // Optional: Console message for added immersion
    console.log("%cWarning: Your system is compromised!", "color: lime; font-size: 16px;");
});
