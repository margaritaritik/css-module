import React from "react";
import {Spring, animated, useSpring} from 'react-spring'
import ChangeColorText from "./components/ChangeColorText";
import Cloud_animation from "./components/animation elements/Cloud_animation";

function App() {
    return (
        <div>
            {/*<ChangeColorText/>*/}
            <Cloud_animation/>
        </div>
    );

}

export default App;
