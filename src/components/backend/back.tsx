import { useEffect, useRef } from "react";

export default function BackCanv(){
    
    const canvasRef = useRef(null)
    let sizeX : number; 
    let sizeY : number;

    useEffect(() => {

        let canvas: any = canvasRef.current;
        canvas.width = innerWidth;
        canvas.height=  innerHeight;
        let context = canvas.getContext('2d');
        sizeX = canvas.width * 4;
        sizeY =canvas.height * 3;

        class Circle{
                radius = Math.random() * canvas.width *2 ;
                EndAngle =    Math.random() * .01;
                StartAngle = Math.PI / 3;
                direction = Math.random() * 5;
                position = Math.random() * 3.14;
                velocity = this.direction == 3 ? .01 : - Math.random() * 0.1; 
                
                x = sizeX / 2 / 2;
                y = sizeY / 2 /2;
                
                draw(){
                    context.beginPath();
                    context.strokeStyle = "#ffffff";
                    context.arc(/*this.x */ 0, this.y , this.radius, this.EndAngle - this.position, this.StartAngle - this.position, false )
                    context.stroke();
                    context.closePath();
                }

                update(){
                    this.EndAngle += this.velocity;
                    this.StartAngle += this.velocity;
                    this.draw();
                }
            }

            let circles: Circle[];

            function init(){
                circles = [];
                for(let i = 0; i< 1000; i++){
                    let circle = new Circle();
                    circles.push(circle);
                } 
            }
            function animate(){
                requestAnimationFrame(animate);
                canvas.width = innerWidth;
                canvas.height = innerHeight;
                sizeX = innerWidth;
                sizeY = innerHeight;
                context.fillStyle = "#000000";
                context.fillRect(0,0, canvas.width, canvas.height);
                
                 circles.forEach((circle: any) => {
                     circle.update();
                 });               
            }

            init();
            animate();  
    }, [])

    return <canvas ref={canvasRef} className=" z-0  absolute h-full w-screen top-0"></canvas>

    
}


