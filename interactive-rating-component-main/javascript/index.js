const mainContainer = document.querySelector(".main-container");
const thankContainer = document.querySelector(".thank-you");
const buttonSubmit = document.getElementById("submit");
const rating = document.getElementById("rating");
const button = document.querySelectorAll(".btn");

buttonSubmit.addEventListener("click", () => {
    thankContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});