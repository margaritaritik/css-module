import React, {useEffect, useState} from "react";

import AnimationView from "./view/animation view/animation";

import Verstka from "./view/verstka view/verstka";
import UxUi from "./view/ux ui view/ux_ui";
import {BrowserRouter as Router, Route, useRoutes} from "react-router-dom";
import Main from "./view/main view/main";


const Path_View = () => {
    const routes = useRoutes([
        { path: "/", element: <Main /> },
        { path: "animatsii", element: <AnimationView /> },
        { path: "verstka", element: <Verstka />},
        { path: "ux-ui", element: <UxUi /> }

    ]);
    return routes;
};
function App() {


    return (
        <>
            <Router>
                <Path_View/>
            </Router>

        </>

    );

}

export default App;
