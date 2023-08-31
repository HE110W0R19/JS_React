//Style
import './styles/style.css';
import React from "react";
import ObjectCreator from "./ObjectCreator";
import Samurai from "./Samurai";
import Empty from "./Empty";
function AllRoad({Road}){
    return (
        <div id={"GameField"}>
            <table>
                <Samurai></Samurai>
                <Empty></Empty>
                <Empty></Empty>
                <Empty></Empty>
                <ObjectCreator objectIndex = {Road[0]}></ObjectCreator>
                <ObjectCreator objectIndex = {Road[1]}></ObjectCreator>
                <ObjectCreator objectIndex = {Road[2]}></ObjectCreator>
                <ObjectCreator objectIndex = {Road[3]}></ObjectCreator>
                <ObjectCreator objectIndex = {Road[4]}></ObjectCreator>
                <ObjectCreator objectIndex = {Road[5]}></ObjectCreator>
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