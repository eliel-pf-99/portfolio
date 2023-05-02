import { image } from "";
import { useEffect, useRef, useState } from "react";
import './style.css';

export default function Intro({nav} : any){

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref : any = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, { rootMargin: (innerWidth > 640) ? "-200px": "180px", threshold:  .5});
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if(isIntersecting){
            nav();
        }
    }, [isIntersecting]);

    return(
        <div ref={ref} id="intro" className='sec mt-10 md:mt-0 pb-10 min-h-screen bg-black w-screen flex flex-col justify-center items-center p-8 md:p-16 gap-10 '>
            <p className="text-7xl md:text-9xl text-white uppercase text-center title">hi, i'm Eliel.</p>
            <p className="text-3xl md:text-5xl text-white relative uppercase text-center fs">
                UI/UX designer, developer, enthusiastic and explorer of technologies.</p>
            <img className="rounded-full w-52 h-52 imganim" src="https://avatars.githubusercontent.com/u/130425050?v=4"/>
            <p className="text-3xl md:text-5xl text-white uppercase text-center relative fsr">Nice to meet you.</p>
        </div>
    );
}