import React, { useEffect, useState } from 'react';
import classes from './MainScreen.module.css';
import newsLogo from '../../../assets/img/news.png'
import authorLogo from '../../../assets/img/author.png'
import scopeLogo from '../../../assets/img/scope.png'
import timeLogo from '../../../assets/img/time.png'
import { NavLink } from 'react-router-dom';
import {timeConverter} from '../../../utilits/timeConverter.js'
import { getNews }  from '../../../api/api.js'
import { Button } from 'antd';
import "antd/dist/antd.css";




 
const MainScreen = (props) => {

    function giveNews(id){
        getNews(id)
            .then(data => {
                props.users.setUserNews(data.data)
                
            })
    }
    
    let post = props.users.main.newsPosts.map((e, id) => (
        
        <NavLink to={`/newsPage/${e.id}`} key={e.id} className={classes.posts_link} onClick={() => giveNews(e.id)}>
            <div className={classes.posts}>
                <div className={classes.post}>
                    <div className={classes.post_title}>
                        <img src={newsLogo} alt="newslogo" />
                        <h2>{e.title}</h2>
                    </div>
                    <div className={classes.post_author}>
                        <img src={authorLogo} alt="authorlogo" />
                        <span>{e.by}</span>
                    </div>
                    <div className={classes.post_time_score}>
                        <div className={classes.time_score_score}>
                            <img src={scopeLogo} alt="scopelogo" />
                            <span>Score: {e.score}</span>
                        </div>
                        <div className={classes.time_score_time}>
                            <img src={timeLogo} alt="timelogo" />
                            <span>{timeConverter(e.time)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    ))

    return (
        
        <div className={classes.container_main}>
            <div className={classes.update_news_button}>
                <Button onClick={() => window.location.reload()}>UPDATE NEWS</Button>
            </div>
            <div>{ post }</div>      
        </div>
        
    )
}

export default MainScreen;