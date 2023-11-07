import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, useRoutes} from "react-router-dom";
import AnimationView from "./view/animation view/animation";
import Verstka from "./view/verstka view/verstka";
import UxUi from "./view/ux ui view/ux_ui";
import Main from "./view/main view/main";
import Layout from "./layout/layout";


const Path_View = () => {
    const routes = useRoutes([
        { path: "/", element: <Main /> },
        { path: "animatsii", element: <AnimationView /> },
        { path: "verstka", element: <Verstka />},
        { path: "ux-ui", element: <UxUi /> },
        {path:"layout",element: <Layout/>},
        {path:"index.html",element: <Layout/>}

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
