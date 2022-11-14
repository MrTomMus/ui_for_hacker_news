import React, { useEffect } from 'react';
import MainScreen from './<MainScreen/MainScreen.jsx';
import classes from './Main.module.css';
import PageNews from './PageNews/PageNews';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getIdNews, getNews }  from '../../api/api.js'
import 'antd/dist/antd.css';
import { Spin } from 'antd';


const Main = (props) => {

   

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
     
    return (
            <div className={classes.main}>
                <div className={classes.container}>  
                <Router>
                    <Switch>
                        <Route exact path={'/'} render={() => props.main.newsPosts.length == 100 ? <MainScreen users={props}/> : <div className={classes.load}>Loading...<Spin size="large"/></div>}/>
                        <Route  path={'/newsPage'} render={() => props.main.userNews ? <PageNews usersNews={props}/> : <div className={classes.load}>Loading...<Spin size="large"/></div>}/>
                    </Switch>      
                </Router>
                </div>
            </div>
      
        
    )
}

export default Main;