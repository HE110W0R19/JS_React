import React from "react";
import ReactDOM from 'react-dom/client';

//Objects
import AllRoad from "./AllRoad";

//JS scripts
import RoadCreator from "./RoadCreator";

const root = ReactDOM.createRoot(document.getElementById('WelcomeDiv'));

root.render(
    <React.StrictMode>
        <AllRoad Road = {RoadCreator.getContent()}></AllRoad>
    </React.StrictMode>
);