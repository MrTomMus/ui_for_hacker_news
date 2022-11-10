import React from "react";
import MainScreen from "./<MainScreen/MainScreen";
import classes from './Main.module.css';
import PageNews from "./PageNews/PageNews";

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <MainScreen/>
                {/* <PageNews /> */}
            </div>
        </div>
    )
}

export default Main;