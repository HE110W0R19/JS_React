import {useState} from "react";

//Style
import '../Styles/style.css';

function Samurai({samuraiRef}) {
    const animationArr = [
        "Images/Samurai/Samurai_Run_Image1.png",
        "Images/Samurai/Samurai_Run_Image2.png",
        "Images/Samurai/Samurai_Run_Image3.png",
        "Images/Samurai/Samurai_Run_Image4.png",
        "Images/Samurai/Samurai_Run_Image5.png",
        "Images/Samurai/Samurai_Run_Image6.png"
    ]
    const [currentFrameSource, setCurrentFrameSource] = useState(0);

    const [url, setUrl] = useState(animationArr[currentFrameSource])

    setTimeout(() => {
        let animIndex = currentFrameSource + 1;
        if (animIndex === animationArr.length) {
            animIndex = 0;
        }
        setCurrentFrameSource(animIndex)
        setUrl(animationArr[animIndex])
    }, 95)

    return (
        <td ref={samuraiRef} id={"samuraiTd"}>
            <img id={"samurai"} src={url}></img>
        </td>
    )
}


export default Samurai