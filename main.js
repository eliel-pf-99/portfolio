import { About } from "./sessions/about/about.js"
import { Home } from "./sessions/home/home.js"
import { Projects } from "./sessions/projects/projects.js"

const menu = document.getElementById("menu")
function menuToggle(){
  menu.classList.toggle("open")
}
menu.addEventListener('click', menuToggle)

const app = document.querySelector("#app")
app.innerHTML += Home + Projects + About;


