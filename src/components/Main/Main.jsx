import React from "react";
import MainScreen from "./<MainScreen/MainScreen";
import classes from './Main.module.css';
import PageNews from "./PageNews/PageNews";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => {
    return (
        
            <div className={classes.main}>
                <div className={classes.container}>  
                <Router>
                    <Switch>
                        <Route exact path={'/'}>
                            <MainScreen/>
                        </Route>
                        <Route  path={'/2'}>
                            <PageNews/>
                        </Route>
                    </Switch>      
                </Router>
                
             
                   
                
                </div>
            </div>
      
        
    )
}

export default Main;