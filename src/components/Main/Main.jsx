import React from "react";
import MainScreen from "./<MainScreen/MainScreen";
import classes from './Main.module.css';
import PageNews from "./PageNews/PageNews";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getIdNews, getNews }  from '../../api/api.js'

const Main = () => {

    getIdNews()
        .then(data => {
            console.log(data.data)
        });

    getNews(33574191)
        .then(data => {
            console.log(data.data)
        })
        

    return (
            <div className={classes.main}>
                <div className={classes.container}>  
                <Router>
                    <Switch>
                        <Route exact path={'/'} render={() => <MainScreen/>}/>
                        <Route  path={'/2'} render={() => <PageNews/>}/>
                    </Switch>      
                </Router>
                
             
                   
                
                </div>
            </div>
      
        
    )
}

export default Main;