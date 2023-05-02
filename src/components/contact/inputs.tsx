import { useState } from "react";
import { sendMessage } from "../../api/message";
import BtnContact from "../utils/BtnContact";
import Toast from "./toast";

export default function ContactMe({run}: any){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [stage, setStage] = useState(3);
    const [message, setMessage] = useState("");
    const [bwill, setBwWill] = useState("");
    const [show, setShow] = useState("");
    const [msg, setMsg] = useState("");
    const exe = () => {
        switch(stage){
            case 1:
                if(message.trim()!== ""){
                    sendMessage({name, email, message}).then(() => {
                        setBwWill("bottom-will");
                        setTimeout(() => success("Message sent"), 1000);
                        setTimeout(run, 2000);
                    }).catch(() => {
                        fail("Error, please try again.")
                    });
                }
                else{
                    fail("Message cannot be empty.");
                }
                break;
            case 2:
                if(email.trim() !== ""){
                    setStage(stage - 1);
                }
                else{
                    fail("E-mail cannot be empty.");
                }
                break;
            case 3:
                if(name.trim() !== ""){
                    setStage(stage - 1);
                    
                }
                else{
                    fail("Name cannot be empty.");
                }
                break;
        }
    }

    const fail = (msg: string) => {
        setMsg(msg);
        setShow("tshow fail");
        setTimeout(()=>{
            setShow("");
        }, 1800);
    }

    const success = (msg: string) => {
        setMsg(msg);
        setShow("tshow success");
        setTimeout(()=>{
            setShow("");
        }, 1800);
    }

    return(
        <div className="overflow-hidden">

        
        <div className={"flex flex-col gap-24 p-8 " + bwill} >
                <h1 
                        className='text-black relative z-50 uppercase md:px-0 md:text-center text-6xl lg:text-8xl text-left font-bold tracking-widest md:tracking-[.5em]'>
                            Contact me
                </h1>
                <div className="flex flex-col justify-center items-center">
                    <input 
                        className={`text-3xl mb-12 bg-transparent md:text-7xl transition-all text-center outline-none ${stage == 3 ? 'inline':'hidden'}` }
                        type="text" 
                        placeholder="What's your name?"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if(e.key == 'Enter'){
                                exe();
                            }
                        }}
                        value={name} />

                    <input 
                        className={`text-3xl  bg-transparent   md:text-7xl transition-all text-center outline-none ${stage == 2 ? 'inline':'hidden'}` }
                        type="text" 
                        placeholder="What's your email?"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        ref={input => input && input.focus()}
                        onKeyDown={(e) => {
                            if(e.key == 'Enter'){
                                exe()
                            }
                        }}
                        value={email} />

                        <div className={`flex flex-col items-center ${stage == 1 ? 'inline':'hidden'}`} >
                            <p className="text-center w-screen italic font-light">Write a message!</p>
                            <textarea ref={input => input && input.focus()} value={message} onChange={(e) => setMessage(e.target.value)} className=" bg-white  text-black border p-6 border-black w-2/3 h-80  md:h-96 resize-none outline-none"></textarea>  
                        </div>
                      
                    <div className="flex justify-center cursor-pointer">
                        <BtnContact   stage={stage} run={exe}/>
                    </div>

            </div> 
            </div>
                        <Toast msg={msg} show={show} />
            </div>
    );
}

