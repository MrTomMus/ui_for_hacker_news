import React from "react";
import classes from '../Header/Header.module.css';
import headerLogo from '../../assets/img/header-logo1.png'

const Header = () => {
    return (
       <div className={classes.header_wrapper}>
            <div className={classes.container}>
                <div className={classes.header_title}>
                    <div className={classes.header_title_logo}>
                        <img src={headerLogo} alt="" />
                    </div>
                    <div className={classes.header_title_title}>
                        <h1 className={classes.header_title_text}>&lt; Hacker News &frasl; &gt;</h1>
                    </div>
                </div>
            </div>
       </div> 
        
    )
}

export default Header