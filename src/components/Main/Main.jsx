import React from "react";
import MainScreen from "./<MainScreen/MainScreen";
import classes from './Main.module.css';

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <MainScreen/>
            </div>
        </div>
    )
}

export default Main;