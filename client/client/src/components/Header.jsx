import React from 'react'
import HomeIcon from '../assets/Icons/home.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='header'>
            <div className='logoBlock'>
                <h2>EasyPicks</h2>
            </div>
            <Link to={"/"}>
                <img src={HomeIcon} alt="" onClick={console.log("click nav")} />
                </Link>
        </header>
    )
}

export default Header