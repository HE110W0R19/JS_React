import {useState} from "react";

//Style
import './styles/style.css';
function Samurai(){
    const animationArr = [
            "Images/Samurai.png",
            "Images/Samurai2.png"
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
    }, 100)
    return (
        <td>
            <img id={"samurai"} src={url}></img>
        </td>
    )
}

export default Samurai