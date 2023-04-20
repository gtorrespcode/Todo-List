import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { IoMdRemoveCircleOutline} from "react-icons/io";


export default function Task(props){

    const [isDecorated, setIsDecorated] = useState(false);


    function Remove(){
        props.onRemove();
    }

    function Decorate(){
        setIsDecorated(!isDecorated);
    }


  

    return (
        <div className="py-4 w-[98%] h-[1%] my-[6%] bg-[#57C5B6] flex items-center rounded-lg shadow-[2px_2px_2px_black]">
        <p className={isDecorated ? "text-xs w-[80%] px-4 break-words line-through  " : "text-xs w-[80%] px-4 break-words"}>{props.content}</p>

        <div>
        <GiConfirmed onClick={Decorate} className="mr-1 inline cursor-pointer hover:text-white"/>
        <IoMdRemoveCircleOutline onClick={Remove} className="inline cursor-pointer hover:text-white"/>
        </div>
        
        
        </div>
    )
}