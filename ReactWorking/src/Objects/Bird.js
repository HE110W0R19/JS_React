import {useState} from "react";

//Style
import '../Styles/style.css';
function Bird(){
    const animationArr = [
        "Images/Bird/Bird_Flying1.png",
        "Images/Bird/Bird_Flying2.png",
        "Images/Bird/Bird_Flying3.png",
        "Images/Bird/Bird_Flying4.png",
        "Images/Bird/Bird_Flying5.png",
        "Images/Bird/Bird_Flying4.png",
        "Images/Bird/Bird_Flying3.png",
        "Images/Bird/Bird_Flying2.png",
    ]
    const [currentFrameSource, setCurrentFrameSource] = useState(0);

    const [url, setUrl] = useState(animationArr[currentFrameSource])

    setTimeout(args => {
        let animIndex = currentFrameSource + 1;
        if(animIndex == animationArr.length){
            animIndex = 0;
        }
        setCurrentFrameSource(animIndex)
        setUrl(animationArr[animIndex])
    }, 80)
    return (
        <td>
            <img id={"bird"} src={url}></img>
        </td>
    )
}

export default Bird