function RoadMoveLogic(Road)
{
    let buffRoad= [];
    for(let i=0;i<26;++i){
        if (i === 25) {
            buffRoad.push(Math.floor(Math.random() * 2000))
            return buffRoad;
        }
        buffRoad.push(Road[i+1]);
    }
    return buffRoad;
}

//export default RoadMoveLogic