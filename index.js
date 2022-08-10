const navbar = document.querySelector("ul.nav");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll("ul.nav li").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}))