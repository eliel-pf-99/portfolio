import { useEffect, useState } from 'react';
import './style.css';

export type NavbarProps = {indicate_name: String, theme: string, show:string, run: any}



export default function Navbar(props: NavbarProps){
    const [active,  setActive] = useState('open');
    const [TextTheme, setTheme] = useState('text-white');
    const [BgTheme, setBgTheme] = useState('#ffffff');
    const [section, setSection] = useState('Home');

    const toggle = () => {
        const v = active !== 'open' ? 'open' : 'close';
        setActive(v);
        props.run();
    }

    const setColor = (color: string) => {
        document.documentElement.style.setProperty("--color", color);
    }


        const handleScroll = () => {
            const sections = document.querySelectorAll('.sec');
            const top = window.scrollY || document.body.scrollTop;
            sections.forEach((sec) => {
                if(top > sec.offsetTop - 100 ){
                    if(sec.id == "intro"){
                        setTheme('text-white');
                        setColor('#ffffff');
                        setSection("home");
                    }
                    if(sec.id == "front"){
                        setTheme('text-black');
                        setColor('#000000');
                        setSection('skills');
                    }
                    if(sec.id == "back"){
                        setTheme('text-white');
                        setColor('#ffffff');
                        setSection("skills");
                    }
                    if(sec.id == 'contact'){
                        setTheme('text-black');
                        setColor('#000000');
                        setSection('contact');
                    }
                }
            });
        }
           
            
            useEffect(() => {
                    window.onload = () => {
                        handleScroll();
                        if(window.screen.width < 640){
                            setColor('#000000');
                            setTheme('text-white')
                        }
                    }
                    window.addEventListener("touchmove", () =>{
                        handleScroll();
                        if(window.screen.width < 640){
                            setColor('#ffffff');
                            setTheme('text-white')
                        }});
                    window.addEventListener("scroll", () => {
                        handleScroll(); 
                        if(window.screen.width < 640){
                            setBgTheme('bg-white');
                            setTheme('text-white')
                        }});
                    return () => {
                        window.removeEventListener('scroll', handleScroll);
                    }
                }, []);
        
    

    

    return (
        <div className='fixed z-[200] top-0 bg-black  md:bg-transparent items-center flex justify-between w-full py-4 px-8 md:px-16'>
            <p className={'uppercase text-2xl font-bold tracking-wider md:text-2xl bg-transparent transition-all ' + TextTheme}>{section}</p>
            <div className='w-9 h-9 flex items-center ' onClick={toggle}>
                <div className={"menu-toggle transition-all x" + props.show + " colors"}></div>
            </div>
        </div>
    );
}