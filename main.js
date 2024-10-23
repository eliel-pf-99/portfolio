const menu = document.getElementById("menu")
function menuToggle(){
  menu.classList.toggle("open")
}
menu.addEventListener('click', menuToggle)

const app = document.querySelector("#app")
app.innerHTML += Home + Projects + About;


