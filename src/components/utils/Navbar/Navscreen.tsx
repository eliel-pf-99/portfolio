export type NavScreenProps = {show: string, run: any}

export default function NavScreen(props: NavScreenProps){
    return(
        <div className={"navscreen "+ props.show} >
            <div className="w-full h-full relative flex items-center justify-center">
                <ul onClick={props.run} className="text-white uppercase gap-16 flex flex-col text-center text-4xl font-bold tracking-wider ">
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#front">front</a></li>
                    <li><a href="#back">back</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </div>
            
        </div>
    );
}