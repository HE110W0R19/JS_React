class RoadCreator{
    constructor() {
        this.roadArr = [];
        for(let i=0; i<11;++i){
            this.roadArr[i] = Math.floor(Math.random() * 2);
        }
    }

    getContent(){
        return this.roadArr;
    }
}

export default new RoadCreator();