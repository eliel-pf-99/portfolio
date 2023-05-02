import './style.css';
export default function BtnContact({run} : any){
    return(
        <div onClick={run} 
        className="p-8">
            
            <p className="uppercase text-center text-3xl font-bold py-4 px-10 rounded border-black btn">press here</p>
            
        </div> 
        
    );
}