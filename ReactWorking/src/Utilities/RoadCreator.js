import {useState} from "react";

class RoadCreator{
    roadArr = [];
    constructor() {
        for (let i = 0; i < 16; ++i) {
            this.roadArr[i] = Math.floor(Math.random() * 1200);
        }
    }

    getContent(){
        return this.roadArr;
    }
}

export default new RoadCreator();