let toggleButton = document.getElementById("toggleNav")
let listNav = document.getElementById("nav-el")
loader.style.display = "flex";

document.addEventListener("DOMContentLoaded",  () => {
    var loader = document.getElementById("loader");
    loader.style.display = "none"
    
});

toggleButton.addEventListener("click", () => {
    listNav.classList.toggle("visible")
    if (listNav.classList.contains("visible")) {
        toggleButton.textContent = '⤫'
    }
    else {
        toggleButton.textContent = '☰'
    }
})

