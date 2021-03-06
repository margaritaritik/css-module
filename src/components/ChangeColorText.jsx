import React from 'react';
import {animated, useSpring} from "react-spring";

const ChangeColorText = () => {
    const container = {
        width:'30px',
        height:'30px',
        background:'cyan',

        borderRadius:'50%',
        // position:'absolute',
        top:'0',
        // bottom:'0',
        // left:'0',
        // right:'0',
        overflow:'hidden',
        // margin:auto;
        // animation: circle 6s linear infinite;
    }
    const divStyle = {
        display: 'flex',
        justifyContent: 'center'
    }
    const props = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee' },
            { opacity: 3, color: 'rgb(14,26,19)' },
            { opacity: 6, color: 'rgb(82,245,163)' },
            { opacity: 3, color: 'rgb(255,116,17)' },
            { opacity: 5, color: 'rgb(10,89,248)' }
        ],
        from: { opacity: 3, color: 'red' },
    });

    const props1 = useSpring({
        x: 100,
        from: { x: 0 }
    });

    return (
        <animated.div style={props} strokeDashoffset={props1.x}>
            Помогите! Я исчезаю
        </animated.div>
    );
};

export default ChangeColorText;