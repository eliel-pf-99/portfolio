import './style.css';
export default function Ready(){
    return(
        <div className='min-h-screen flex flex-col items-center justify-center flex-wrap'>
            
            <h1 className="thanks uppercase text-center font-bold text-5xl md:text-8xl tracking-[.5em]">
                Thank you
            </h1>
             <div className='relative h-16 overflow-hidden mt-7 w-full'>
                <p className="uppercase bckwill text-center text-3xl">I will get to you as soon as possible.</p>
            </div> 

            
        </div>
    );
}