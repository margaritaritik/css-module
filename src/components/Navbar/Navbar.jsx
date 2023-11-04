import React, {useState} from 'react';
import style from './navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.box}>
                    <ul
                        className={
                            nav ? [style.menu, style.active].join(' ') : [style.menu]
                        }
                    >
                        <li>
                            <a href='/animatsii'>АНИМАЦИИ</a>
                        </li>
                        <li>
                            <a href='/verstka'>ВЕРСТКА</a>
                        </li>
                        <li>
                            <a href='/ux-ui'>UX/UI</a>
                        </li>
                    </ul>
                    <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;