import {useRef} from "react";
//Style
import '../Styles/style.css';

function Cactus({GetTdAction, time}){

    const cactusRef = useRef(null)

    /*setTimeout(()=>{
        if(cactusRef.current != null){
            console.log(cactusRef.current.offsetWidth)
        }
    }, 500)*/

    function getTdSizeAction(){
        return cactusRef.current == null ? null : cactusRef.current.offsetWidth;
    }

    if(GetTdAction!==undefined){
        setTimeout(()=>{
            GetTdAction(getTdSizeAction);
        }, time)
    }

    return (
        <td ref={cactusRef}>
            <img id={"cactus"} src={"Images/Cactus.png"}></img>
        </td>
    )
}

export default Cactus