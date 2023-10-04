let toggleButton = document.getElementById("toggleNav")
let listNav = document.getElementById("nav-el")

toggleButton.addEventListener("click",()=>{
    listNav.classList.toggle("visible")
})