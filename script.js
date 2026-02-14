document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.getElementById("envelope");
    const mainContent = document.getElementById("mainContent");
    const envelopeContainer = document.getElementById("envelopeContainer");
    const music = document.getElementById("bg-music");
    music.load();

    envelope.addEventListener("click", () => {

    // 🎵 Play instantly
    music.currentTime = 0;
    music.play().catch(error => console.log(error));

    // 💌 Animate flap
    document.querySelector(".flap").style.transform = "rotateX(180deg)";

    setTimeout(() => {
        envelopeContainer.style.display = "none";
        mainContent.style.display = "block";
        startTypewriter();
        startHearts();
    }, 100);

});
    

    // 💖 Typewriter
    const messageText = `My ride or die 💅💖

Through breakdowns, glow-ups, stress, success, and every chaotic chapter in between — you’ve been there. And that means everything. 🌸✨  

You’ve seen every version of me and loved me anyway. That’s rare. That’s special. That’s forever. 💞  

Thank you for choosing me as your person, again and again. I promise I’ll always choose you too. 🤍🌷  

Here’s to more memories, more laughter, more healing, and more late-night talks.  
Happy Galentine’s Day, my forever constant 💘🌟`;


    function startTypewriter() {
        let i = 0;
        const speed = 40;
        const typewriter = document.getElementById("typewriter");

        function typing() {
            if (i < messageText.length) {
                typewriter.innerHTML += messageText.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    // 🌸 Floating Hearts
    function startHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💖";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = Math.random() * 20 + 15 + "px";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);
        }, 500);
    }

    // 📸 Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const images = document.querySelectorAll(".gallery img");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";

});
