import Empty from "./Empty";
import Cactus from "./Cactus";

function ObjectCreator({objectIndex}) {
    if (objectIndex == 0) {
        return <Empty></Empty>
    }
    if (objectIndex == 1) {
        return <Cactus></Cactus>
    }
}

export default ObjectCreator