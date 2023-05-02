import { useEffect, useRef, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';
import data from "../../assets/skills.json";
import './style.css';

 function AnimateObserver(setIsIntersecting: any, ref: any){
  const observer = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, { rootMargin: (innerWidth > 640) ? "-300px": "-100px", threshold:  0});

  observer.observe(ref.current);
  return () => observer.disconnect();
}

 function AnimateRun(isIntersecting: boolean, ref: any){
  if(isIntersecting){
    ref.current.querySelectorAll('.esn').forEach((el: any) => {
      el.classList.add('shw');
    });
  }
  else{
    ref.current.querySelectorAll('.esn').forEach((el: any) => {
      el.classList.remove('shw');
    });
  }
}

function NavObserver(setIsView: any, ref: any){
  const observer = new IntersectionObserver(([entry]) => {
    setIsView(entry.isIntersecting);
  }, { rootMargin: "0px"});

  observer.observe(ref.current);
  return () => observer.disconnect();
}




export default function Backend({nav}: any){
    function getIcon(icon: string){
        let aws = FaIcons[icon];
        if(aws === undefined){
            aws = TbIcons[icon];
            if(aws === undefined){
            aws = SiIcons[icon];
        }
        } 
        return aws;
    }

    let skills_front = data.backend.map((skill, index) => {
        let Icon = getIcon(skill.icon);
        return(    
        <div className='grid text-center text-white  gap-4' key={index}>
            <div className='rounded-full p-4'>
                <Icon size='50' color="white"/>
            </div>
            {skill.name}
        </div>
        );
    });

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [isView, setIsView] = useState(false);
    const ref: any = useRef(null);

  useEffect(() => {
    AnimateObserver(setIsIntersecting, ref);
  }, [isIntersecting]);

  useEffect(() => {
    AnimateRun(isIntersecting, ref);
  },  [isIntersecting])

  // useEffect(() => NavObserver(setIsView, ref), [isView]);
  // useEffect(() => {
  //   if(isView){
  //     nav("back end", "white")
  //   }
  // }, [isView]);
    

    return(
        <div id="back" ref={ref} className='bg-black min-h-screen sec'>
        <div  className='esn  py-16 md:py-18 flex flex-col items-center justify-center'>
                    
                    <h1 
                        className='text-white relative z-50 uppercase px-16 md:px-0 md:text-center text-6xl lg:text-8xl text-left font-bold tracking-widest md:tracking-[.5em]'>
                            Back End
                    </h1>

                    <div className="flex flex-row flex-wrap gap-16 md:gap-32 justify-center py-10 px-16 md:px-64">
                        {skills_front}
                    </div> 
        </div>
        </div>
    )
}