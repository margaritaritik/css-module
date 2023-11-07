import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
// import vv from '../../layout/layout figma/konstruct-template-/index.html'

const Verstka = () => {
    let navigate = useNavigate();
    return (
        <>
            <Navbar/>
            <div onClick={() => {
                navigate("/layout");
            } }>verstka</div>

        </>
    );
};

export default Verstka;