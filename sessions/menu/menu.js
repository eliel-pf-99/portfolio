const laodFunc = () => {
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

  function isVisible(el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
  }

  document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll(".sections");
    const pags = document.querySelectorAll(".box-circle");
    const pags_mob = document.querySelectorAll(".menu-cir");
    const pags_menu = document.querySelectorAll(".menu-select");
    for(let i=0; i < elements.length; i++){
      if(isVisible(elements[i])){
        handlePagination(pags, i, "selected");
        handlePagination(pags_menu, i, "selected-mob");
        handlePagination(pags_mob, i, "selected-mob");
        if(elements[i].classList.contains("contact")){
          if(arrowState == "down"){
            arrowRotate("normal");
            arrowState = "up"
          }
          
        }
        else {
          if(arrowState == "up"){
            arrowRotate("reverse");
            arrowState = "down";
          }
        }
      }
    }
  });

  let arrowState = "down"
  function arrowRotate(direction){
    const anim = [{transform: 'translateX(-50%) rotate(0deg)'},{transform: 'translateX(-50%) rotate(180deg)'}]
    const arrow = document.querySelector(".arrow");
    arrow.animate(anim, {duration: 500, iterations: 1, direction, fill: "forwards" })
  }

  function handlePagination(elements, index, word){
    elements.forEach(item => item.classList.remove(word));  
    elements[index].classList.add(word)
  }
}
const Menu = data => {
  return (`
  <div class="menu-popup" id="menu-popup">
    <h1 class="title-menu menu-content">MENU</h1>
    <div class="menu-items menu-content ">
      <div class="menu-item">
        <div class="menu-text">
          <a href="#home">${data.menu.home}</a>
        </div>
        <div class="menu-select"></div>
      </div>
      <div class="menu-item">
        <div class="menu-text">
          <a href="#projects">${data.menu.projects}</a>
        </div>
        <div class="menu-select"></div>
      </div>
      <div class="menu-item">
        <div class="menu-text">
          <a href="#about">${data.menu.about}</a>
        </div>
        <div class="menu-select"></div>
      </div>
      <div class="menu-item">
        <div class="menu-text">
          <a href="#contact">${data.menu.contact}</a>
        </div>
        <div class="menu-select"></div>
      </div>
    </div>
    <div class="menu-items-mob menu-content">
      <div class="menu-item-mob">
        <div class="menu-select-mob">
          <div class="square"><div class="menu-select menu-cir"></div></div>
        </div>
        <div class="menu-text-mob">
          <a href="#home">${data.menu.home}</a>
        </div>
      </div>
      <div class="menu-item-mob">
        <div class="menu-select-mob">
          <div class="square"><div class="menu-select menu-cir"></div></div>
        </div>
        <div class="menu-text-mob">
          <a href="#projects">${data.menu.projects}</a>
        </div>
      </div>
      <div class="menu-item-mob">
        <div class="menu-select-mob">
          <div class="square"><div class="menu-select menu-cir"></div></div>
        </div>
        <div class="menu-text-mob">
          <a href="#about">${data.menu.about}</a>
        </div>
      </div>
      <div class="menu-item-mob">
        <div class="menu-select-mob">
          <div class="square"><div class="menu-select menu-cir"></div></div>
        </div>
        <div class="menu-text-mob">
          <a href="#contact">${data.menu.contact}</a>
        </div>
      </div>
    </div>
    <div class="lang menu-content">
        ${data.menu.language}:
        <div class="lang-option ${data.menu.language == 'idioma' ? 'lang-selected' : ''} menu-item"><span class="menu-text">PT</span></div>
        <div class="lang-option ${data.menu.language == 'language' ? 'lang-selected' : ''} menu-item"><span class="menu-text">EN</span></div>
    </div>
  </div>
`)}

