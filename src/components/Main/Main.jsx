import React, { useEffect } from "react";
import MainScreen from "./<MainScreen/MainScreen.jsx";
import classes from './Main.module.css';
import PageNews from "./PageNews/PageNews";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getIdNews, getNews }  from '../../api/api.js'


const Main = (props) => {

   console.log(props)

    useEffect(() => {
        getIdNews()
        .then(data => {
            
            for(let i = 0; i<100; i++){
                getNews(data.data[i])
                    .then(data => {
                        props.setNews(data.data)
                    })
            }
        });
    },[])
  
    console.log(props)
    return (
            <div className={classes.main}>
                <div className={classes.container}>  
                <Router>
                    <Switch>
                        <Route exact path={'/'} render={() => props.main.newsPosts.length == 100 ? <MainScreen users={props}/> : <div className={classes.load}>Loading...</div>}/>
                        <Route  path={'/2'} render={() => props.main.userNews && props.main.userNews.title == props.main.userNews.title ? <PageNews usersNews={props}/> : <div className={classes.load}>Loading...</div>}/>
                    </Switch>      
                </Router>
                </div>
            </div>
      
        
    )
}

export default Main;