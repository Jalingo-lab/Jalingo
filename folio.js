// Typing Effect
const text = ["I am a Web Developer", "I build websites", "I love coding"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML = currentText.substring(0, j++);
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = currentText.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});

// Background Glow
for (let i = 0; i < 3; i++) {
    let blob = document.createElement("div");
    blob.style.position = "fixed";
    blob.style.width = "300px";
    blob.style.height = "300px";
    blob.style.background = "rgba(56,189,248,0.15)";
    blob.style.borderRadius = "50%";
    blob.style.filter = "blur(100px)";
    blob.style.top = Math.random() * 80 + "%";
    blob.style.left = Math.random() * 80 + "%";
    blob.style.zIndex = "-1";
    document.body.appendChild(blob);
}