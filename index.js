const hamEl = document.querySelector(".hamburger")
const navEl = document.querySelector('.nav-menu')

hamEl.addEventListener("click",()=>{
    hamEl.classList.toggle('active')
    navEl.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click",()=>{
    hamEl.classList.remove('active')
    navEl.classList.remove('active')
}))