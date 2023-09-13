class RoadCreator{
    roadArr = [];
    constructor() {
        for (let i = 0; i < 26; ++i) {
            this.roadArr[i] = Math.floor(Math.random() * 2000);
        }

    }

    getContent(){
        return this.roadArr;
    }
}

export default new RoadCreator();