//Style
import '../Styles/style.css';
import React, {useState} from "react";
import ObjectCreator from "../Utilities/ObjectCreator";
import Samurai from "./Samurai";
import roadMoveLogic from "../Logics/RoadMoveLogic";

function AllRoad({Road}) {

    const [RoadArr, setRoad] = useState(Road);

    setTimeout(args => {
        setRoad(roadMoveLogic(RoadArr));
        console.log(RoadArr);
    }, 500)

    return (
        <div id={"GameField"}>
            <table>
                <ObjectCreator objectIndex={RoadArr[0]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[1]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[2]}></ObjectCreator>
                <Samurai></Samurai>
                <ObjectCreator objectIndex={RoadArr[3]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[4]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[5]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[6]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[7]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[8]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[9]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[10]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[11]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[12]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[13]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[14]}></ObjectCreator>
                <ObjectCreator objectIndex={RoadArr[15]}></ObjectCreator>
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