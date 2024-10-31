const canvas = document.querySelector("#canva");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight -200;
let particles = [];

class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 10;
    this.weight = 2;
    this.directionX = 1;
  }
  update(){
    this.weight += 0.01;
    this.y += this.weight;
  }
  draw(){
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
    ctx.closePath();
    ctx.fill()
  }
}

const particle1 = new Particle((window.innerWidth - 100) / 2, (window.innerHeight - 100) / 2,);

function animateP(){
  particle1.update();
  particle1.draw();
  // requestAnimationFrame(animateP)
}

animateP();