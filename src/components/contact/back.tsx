import { useEffect, useRef } from "react";

export default function ContactCanv(){
    
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

        class Line{
                width = Math.random() * 300;
                start = -100;
                velocity = Math.random() * 30;
                y = Math.random() * innerHeight;
                
                draw(){
                    context.beginPath();
                    context.moveTo(this.start, this.y);
                    context.lineTo(this.start + this.width, this.y);
                    context.lineWidth = 1;
                    context.stroke();
                }

                update(){
                    if(this.start > innerWidth){
                        this.start = -100
                    }
                    this.start += this.velocity;
                    
                    this.draw();
                }
            }

            let circles: Line[];

            function init(){
                circles = [];
                for(let i = 0; i< 800; i++){
                    let circle = new Line();
                    circles.push(circle);
                } 
            }
            function animate(){
                requestAnimationFrame(animate);
                canvas.width = innerWidth;
                canvas.height = innerHeight;
                sizeX = innerWidth;
                sizeY = innerHeight;
                context.clearRect(0,0, canvas.width, canvas.height);
                
                 circles.forEach((circle: any) => {
                     circle.update();
                 });               
            }

            init();
            animate();  
    }, [])

    return <canvas ref={canvasRef} className=" z-0  absolute min-h-full w-full top-0"></canvas>

    
}


