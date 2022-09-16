import React, {useEffect, useState} from 'react';

const changeStr=(str)=>{
    return (str[str.length -1] + str.substring(0, str.length - 1));
}

const Revert = ({s}) => {
    const [strCopy,setStrCopy]=useState(s);

    useEffect(()=>{
       const timerId= setInterval(
            () => setStrCopy(changeStr(strCopy)),
            1000
        );
        return () => clearInterval(timerId);
    },[strCopy]);
    return (
        <div>
            <p>{strCopy}</p>
        </div>
    );
};

export default Revert;