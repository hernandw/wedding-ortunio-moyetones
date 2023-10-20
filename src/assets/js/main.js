const boton = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

boton.addEventListener("click", () => {
    nav.classList.toggle("hidden");
})