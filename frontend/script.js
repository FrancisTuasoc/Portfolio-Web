const button = document.getElementById("toggle-button");
const display = document.getElementById("portfolio-about");

button.addEventListener("click", () => {
    display.classList.toggle("light-dark");

    if (display.classList.contains("light-dark")) {
        button.textContent = "Dark Mode";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    } else {
        button.textContent = "Light Mode";
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }
});