const menu = document.getElementById("menu")
const menuPop = document.querySelector("#menu-popup")
const menuContent = document.querySelectorAll(".menu-content")
const animationPopup = [{height: "70%"}, {height: "0%"}]
const animationContent = [{opacity: "1"}, {opacity: "0"}]

function menuToggle(){
  menu.classList.contains("open") ? closePopup() : openPopup()
}

function closePopup(){
  menu.classList.remove("open")
  menuPop.animate(animationPopup, {duration: 2000, iterations: 1, fill: "forwards" })
  for(let i=0; i < menuContent.length; i++){
    menuContent[i].animate(animationContent, {duration: 500, iterations: 1, fill: "forwards" })
  }
}

function openPopup(){
  menu.classList.add("open")
  menuPop.animate(animationPopup, {duration: 2000, iterations: 1, direction: "reverse", fill:"forwards" })
  for(let i=0; i < menuContent.length; i++){
    menuContent[i].animate(animationContent, {duration: 2500, iterations: 1, fill: "forwards", direction: "reverse" })
  }
}

menu.addEventListener('click', menuToggle)
const Menu = ``;