import { useState } from "react";
import Ready from "./Ready";
import ContactMe from "./inputs";

export default function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [stage, setStage] = useState(1);
    const [message, setMessage] = useState("");
    const [ready, setReady] = useState(false);

    const actionPressHere = () => {
        //function showAlert(inp: string){
        //     alert(`${inp} couldn't be none!`);
        // }

        switch(stage){
            case 3:
                if(name !== ""){
                    setStage(stage - 1);
                }
                else{
                    // showAlert("Your name")
                }
                break;
            case 2:
                if(email !== ""){
                    setStage(stage - 1);
                }
                else{
                    // showAlert("Your email")
                }
                break;
            case 1:
                setReady(true);
                if(message !== ""){
                    
                }
                else{
                    // showAlert("Your message")
                }
                break;
        }
    }
   
    

    return(
        <div id="contact" className="sec flex justify-center items-center w-full min-h-full ">
            {ready ? <Ready /> : <ContactMe run={actionPressHere}/>}
        </div>
    );
}