import React, {useState} from 'react';
import {animated, useSpring} from "react-spring";
import stylesAnimated from "../css/animationBlock.module.css"



const ChangeColorText = () => {
    const [todos,setTodos]=useState([{id:1, title:'first',completed:true},
        {id:2, title:'second',completed:false},
        {id:3, title:'second 3 ',completed:true}]);
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

    const styles = useSpring({
        loop: { reverse: true },
        from: {  x: 0 },
        to: { x: 100 },
    })

    const list=todos.map(item=>(<animated.div className={stylesAnimated.items}>{ item.title}</animated.div>));
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




    const props1 = useSpring({
        x: 100,
        from: { x: 0 }
    });

    return (
        <animated.div className={stylesAnimated.container}  >
            {list}
        </animated.div>
    );
};

export default ChangeColorText;