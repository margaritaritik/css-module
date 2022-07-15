import React from "react";
import {Spring, animated, useSpring} from 'react-spring'

function App() {
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
        opacity: 0,
        from: { opacity: 3 },
    });

  return (
      <animated.div style={props}>
          Помогите! Я исчезаю
      </animated.div>
    // <div className="App" style={props} >
    //   <div className="cercle" style={container}></div>
    // </div>
  );
}

export default App;
