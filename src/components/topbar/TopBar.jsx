import React from 'react';
import './topbar.css';
import { Link } from'react-router-dom';


const TopBar = () => {
    
    return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to='/' className='link'>HOME</Link>
                </li>
                <li className="topListItem">
                <Link to='/about' className='link'>ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link to='/contact' className='link'>CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link to='/write' className='link'>WRITE</Link>
                </li>
                
            </ul>
        </div>
        <div className="topRight">
            
                
                    
               
                    <ul className='topList'>
                        <li className="topListItem">
                        <Link to='/login' className='link'>LOGIN</Link>
                        </li>
                     
                     <li className="topListItem">
                     <Link to='/register' className='link'>REGISTER</Link>
                     </li>
                    </ul>
                    <img className='topImg' src="https://i.pinimg.com/originals/a2/31/b9/a231b9d20f03b582166a4f84255fb093.jpg"
                    alt="" />
                   
                
            
           
            <i className='topSearchIcon fas fa-search'></i>
        </div>
    </div>
    )
}


export default TopBar;