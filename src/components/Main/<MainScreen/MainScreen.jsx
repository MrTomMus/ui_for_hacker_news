import React from "react";
import classes from './MainScreen.module.css';
import newsLogo from '../../../assets/img/news.png'
import authorLogo from '../../../assets/img/author.png'
import scopeLogo from '../../../assets/img/scope.png'
import timeLogo from '../../../assets/img/time.png'

const MainScreen = (props) => {

    let arr = [1,2,3,4,5,6];

    let post = arr.map((e) => (
        <div className={classes.posts}>
            <div className={classes.post}>
                <div className={classes.post_title}>
                    <img src={newsLogo} alt="newslogo" />
                    <h2>sdasdsad dsafsaf dfdsgdfsdasdsad dsafsaf dfdsgdfg dfsdfsdfsdasdsad dsafsaf dfdsgdfg dfsdfsdfsdasdsad dsafsaf dfdsgdfg dfsdfsdfsdasdsad dsafsaf dfdsgdfg dfsdfsdfg dfsdfsdf</h2>
                </div>
                <div className={classes.post_author}>
                    <img src={authorLogo} alt="authorlogo" />
                    <span>Автор</span>
                </div>
                <div className={classes.post_time_score}>
                    <div className={classes.time_score_score}>
                        <img src={scopeLogo} alt="scopelogo" />
                        <span>Рейтинг</span>
                    </div>
                    <div className={classes.time_score_time}>
                        <img src={timeLogo} alt="timelogo" />
                        <span>Дата публикации</span>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div>
            {
               post 
            }
        </div>
        
    )
}

export default MainScreen;