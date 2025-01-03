const app = document.querySelector("#app")
let language = "PT";
let data = language == "EN" ? lang.en : lang.pt;

function langFunc(){
  const lgs = document.querySelectorAll('.lang-option');
  lgs.forEach(btn => btn.addEventListener('click', () => {langToggle()}))
  function langToggle(){
    language = language ==  "EN" ? "PT" : "EN";
    lgs.forEach(btn => btn.classList.toggle("lang-selected"));
    data = language == "EN" ? lang.en : lang.pt;
    app.innerHTML = '';
    loadApp();
  }
}

function loadApp(){ 
  app.innerHTML += Fixed() + Home(data) + Projects(data) + About(data) + Contact(data) + Menu(data);
  laodFunc();
  langFunc();
}

loadApp();



