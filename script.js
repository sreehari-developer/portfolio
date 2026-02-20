// MOBILE MENU
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// CLOSE MENU WHEN LINK CLICKED (MOBILE UX)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
    });
});

// TYPING EFFECT WITH DELETE
const words = ["Web Developer", "Freelancer", "UI Designer"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    if (!typing) return;

    currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.slice(0, ++letterIndex);
    } else {
        typing.textContent = currentWord.slice(0, --letterIndex);
    }

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// DARK MODE TOGGLE + ICON CHANGE
const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
};

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

// MODAL
function openModal(text) {
    const modal = document.getElementById("modal");
    document.getElementById("modalText").innerText = text;
    modal.style.display = "flex";
}

// CLOSE MODAL
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// CLOSE MODAL WHEN CLICK OUTSIDE
window.onclick = function (e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// CONTACT BUTTON
function showMessage() {
    alert("Thanks for reaching out! 🚀");
}
