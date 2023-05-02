import './style.css';
export default function Card(){
    return(
        <div className="w-72 card bg-black z-50 flex justify-left px-2 py-2 items-center border-4 rounded border-white ">
            <img className="w-16 h-16 p-2" src="https://plus.unsplash.com/premium_photo-1661274028795-bcad5a5c1355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <p className="font-bold text-white uppercase p-2 md:p-4 text-xl md:text-2xl tracking-wide md:tracking-widest">typescript</p>
        </div>
    )
}