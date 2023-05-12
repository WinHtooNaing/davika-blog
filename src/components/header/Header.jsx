import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Davika</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://th.bing.com/th/id/R.765e4004dc8338d646ee99ac5c519908?rik=gTvp0pVIQYuPdA&pid=ImgRaw&r=0" alt="" className="headerImg" />
            
        </div>
    )
}



export default Header;