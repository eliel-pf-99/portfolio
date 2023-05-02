import { AiFillAlert } from "react-icons/ai";
import { BsSendCheckFill } from "react-icons/bs";
import './style.css';
export default function Toast({msg, show} : any){
    

    return(
        <div className={`toast text-xl flex gap-5 items-center ${show}`}>
            {show.includes("fail") ? <AiFillAlert size={35} color="red" /> : <BsSendCheckFill color="green"/>}
            {msg}
        </div>
    );
}