// MOBILE MENU
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// TYPING EFFECT
const text = ["Web Developer", "Freelancer", "UI Designer"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
    if (count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 120);
})();

// DARK MODE
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");
}

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// MODAL
function openModal(text) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalText").innerText = text;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function showMessage() {
    alert("Your message has been sent 🚀");
}
