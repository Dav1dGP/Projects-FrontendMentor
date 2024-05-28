const mainContainer = document.querySelector(".main-container");
const thankContainer = document.querySelector(".thank-you");
const buttonSubmit = document.getElementById("submit");
const rating = document.getElementById("rating");
const buttons = document.querySelectorAll(".btn");

buttonSubmit.addEventListener("click", () => {
    thankContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        rating.textContent = button.textContent;
        // rating.innerHTML = button.innerHTML;
    });
});