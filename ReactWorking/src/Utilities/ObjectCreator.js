import Empty from "../Objects/Empty";
import Cactus from "../Objects/Cactus";
import {useState} from "react";
import Bird from "../Objects/Bird";

function ObjectCreator({objectIndex}) {
    if (objectIndex >= 301 && objectIndex <= 1199) {
        return <Empty></Empty>
    }
    if (objectIndex >= 101 && objectIndex <= 300) {
        return <Cactus></Cactus>
    }
    if (objectIndex >= 0 && objectIndex <= 100) {
        return <Bird></Bird>
    }
}

export default ObjectCreator