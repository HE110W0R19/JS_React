import Empty from "../Objects/Empty";
import Cactus from "../Objects/Cactus";
import Sponge from "../Objects/SpongeBob";

function CactusCreator({getTdAction, time, objectIndex}) {
    if (objectIndex === 1444) {
        return <Sponge GetTdAction={getTdAction} time={time}></Sponge>
    }
    if (objectIndex >= 1400 && objectIndex <= 1500) {
        return <Cactus GetTdAction={getTdAction} time={time}></Cactus>
    } else {
        return <Empty GetTdAction={getTdAction} time={time}></Empty>
    }
}

export default CactusCreator