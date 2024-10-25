const app = document.querySelector("#app")
app.innerHTML += Home + Projects + About + Contact + Menu;

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
  console.log(pags_mob);
  for(let i=0; i < elements.length; i++){
    if(isVisible(elements[i])){
      handlePagination(pags, i, "selected");
      handlePagination(pags_mob, i, "selected-mob");
      handlePagination(pags_menu, i, "selected-mob");
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

function addFuncToScrollLink(links, sections){
  for(let i=0; i < links.length; i++){
    links[i].addEventListener('click', () => {
      sections[i].scrollIntoView({behavior: 'smooth'})
    })
  }
}

