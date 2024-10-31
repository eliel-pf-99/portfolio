const canvas = document.querySelector("#bg-canva");
const ctx = canvas.getContext('2d');
const particles = []

class Particle{
  constructor() {
    this.hue = 0;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX =   Math.random() * 3 - 1.5;
    this.speedY =   Math.random() * 3 - 1.5;
    this.directionX = true;
    this.directionY = true;
    this.sum = 1;
    this.color = `hsl(${this.hue}, 100%, 50%)`;
  }

  update() {
    if(this.x > (canvas.width)){
      this.directionX = false;
    }
    else{
      if(this.x < 10){
        this.directionX = true;
      }
    }
    if(this.y > (canvas.height)){
      this.directionY = false;
    }
    else{
      if(this.y < 10){
        this.directionY = true;
      }
    }

    if(this.directionY){
      this.y += this.speedY;
    }
    else{
      this.y -= this.speedY;
    }

    if(this.directionX){
      this.x += this.speedX;
    }
    else{
      this.x -= this.speedX;
    }
    this.hue+=this.sum;
    if(this.hue == 0 || this.hue == 60){
      this.sum *= -1;
    }
    this.color = `hsl(${this.hue}, 100%, 50%)`
    
  }



  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function canvaSize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

canvaSize();

window.addEventListener('resize', canvaSize);

function init(){
  for(let i=0; i < 100; i++){
    const p = new Particle();
    p.draw(ctx);
    particles.push(p);
  }
}

function handleParticles(){
  for(let i=0; i < particles.length; i++){
    particles[i].update();
    particles[i].draw(ctx);
    for(let j=i; j < particles.length; j++){
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if(distance < 100){
        ctx.beginPath();
        ctx.strokeStyle = particles[i].color;
        ctx.lineWidth = 0.6;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      } 
    }
    if(particles[i].size <= 0.3){
      particles.splice(i, 1);
      i--;
   }
  }
}

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
init();
animate();