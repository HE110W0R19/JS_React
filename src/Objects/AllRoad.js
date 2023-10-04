//Style
import '../Styles/style.css';
import React, {useRef, useState, useEffect} from "react";
import CactusCreator from "../Utilities/CactusCreator";
import Samurai from "./Samurai";
//import roadMoveLogic from "../Logics/RoadMoveLogic";
import BirdCreator from "../Utilities/BirdCreator";
import Ground from "./Ground";

let personNeedJump = false;

function AllRoad({Road}) {

    const [RoadArr, setRoad] = useState(Road.getContent());
    const trRef= useRef(null);
    const samuraiRef = useRef(null);

    let offsetRoadInterval = 0;
    let offsetSamuraiInterval = 0; //450
    let tdSize = null;
    let needNextUpdate = true;

    let samuraiTopIndex = 0; //160

    /*setTimeout(args => {
        setRoad(roadMoveLogic(RoadArr));
        console.log("RoadArr: " + RoadArr);
    }, 250)*/

    function getTdSize(getTdSizeAction) {
        if (getTdSizeAction() !== null) {
            //console.log("GetTd: ", getTdSizeAction());
            tdSize = getTdSizeAction();
        }
    }

    function SetTrMove(time) {
        setTimeout(() => {

            if (trRef.current === null || tdSize===null || samuraiRef === null) {
                SetTrMove(time);
                return;
            }

            setTimeout(()=>{

                if(samuraiTopIndex <= -80){ //80
                    personNeedJump = false;
                }

                if (personNeedJump === true && samuraiTopIndex !== -80){ //160
                    samuraiTopIndex -= 2;
                }
                else if (personNeedJump === false && samuraiTopIndex !== 0) { //160
                    samuraiTopIndex += 2;
                }
            }, 50);

            offsetRoadInterval -= 1;
            offsetSamuraiInterval += 1;

            if (offsetRoadInterval <= -tdSize) {
                offsetRoadInterval += tdSize;
                needNextUpdate = false;
                setRoad(Road.RoadMoveLogic(RoadArr));
            }

            samuraiRef.current.style.top = `${samuraiTopIndex}px`;

            if(needNextUpdate){
                trRef.current.style.left = `${offsetRoadInterval}px`;
                samuraiRef.current.style.left = `${offsetSamuraiInterval}px`;
                SetTrMove(time);
            }
        }, time)
    }

    useEffect(()=>{
        return ()=>{
            samuraiRef.current.style.left = `0px`; //450
            trRef.current.style.left = `${offsetRoadInterval}px`;
        }
    })

    SetTrMove(10);
    let JumpEvent = (event)=> {
        /* 32 - Space button code*/
        //console.log(`Samurai location: ${samuraiRef.current.style.top}`);
        personNeedJump = true;
    }

    //console.log(RoadArr);
    return (
        <div id={"GameField"}>
            <input id={"inputForJumpPerson"} type={"textfield"} onKeyPress={JumpEvent}/>
            <table>
                <tbody ref={trRef} id={"allRoadTr"}>
                    <tr>
                        <BirdCreator getTdAction={getTdSize} time={50} objectIndex={RoadArr[0]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[1]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[2]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[3]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[4]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[5]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[6]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[7]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[8]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[9]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[10]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[11]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[12]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[13]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[14]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[15]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[16]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[17]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[18]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[19]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[20]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[21]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[22]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[23]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[24]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[25]}></BirdCreator>
                        <BirdCreator objectIndex={RoadArr[26]}></BirdCreator>
                    </tr>
                    <tr>
                        <CactusCreator getTdAction={getTdSize} time={50} objectIndex={RoadArr[0]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[1]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[2]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[3]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[4]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[5]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[6]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[7]}></CactusCreator>
                        <Samurai samuraiRef={samuraiRef}></Samurai>
                        <CactusCreator objectIndex={RoadArr[8]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[9]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[10]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[11]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[12]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[13]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[14]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[15]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[16]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[17]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[18]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[19]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[20]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[21]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[22]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[23]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[24]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[25]}></CactusCreator>
                        <CactusCreator objectIndex={RoadArr[26]}></CactusCreator>
                    </tr>
                    <tr>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                        <Ground></Ground>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AllRoad

/*
                    <!--<tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>-->
                <!--<tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>-->
                <!--<tr>
                    <td></td>
                    <Samurai></Samurai>
                    <td></td>
                    <td></td>
                    <Cactus></Cactus>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>-->
                <!--<tr>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                </tr>-->
*/