
import { NavLink } from "react-router-dom";
import classes from './PageNews.module.css';
import Comments from './Сomments/Comments.jsx';
import comCounter from './Сomments/Comments.jsx';
import { getComments } from "../../../api/api.js";
import {timeConverter} from '../../../utilits/timeConverter.js';
import { useEffect } from "react";



const PageNews = (props) => {

    console.log(props)

    let userNews = props.usersNews.main.userNews;
    console.log(userNews)
    
    // тут запрос на комментарии
   
    useEffect(() =>{
        if(userNews.kids){
            userNews.kids.forEach((e) => {
                getComments(e)
                    .then(data => {
                    props.usersNews.setCommentsNews(data.data.text)
            })
            }) 
        }  
        return props.usersNews.deleteCommentsNews() 
    },[])

    return (
        <div className={classes.pagenews_wrapper}>
            <div className={classes.pagenews}>
                <div className={classes.pagenews_title}>
                    <h2>{userNews.title}</h2>
                </div>
                <div className={classes.pagenews_author}>
                    <span>{userNews.by}</span>
                </div>
                <div className={classes.pagenews_link_date}>
                    <div className={classes.link}>
                        <span><a href={`${userNews.url}`} target="_blank">Go To Site</a></span>
                    </div>
                    <div className={classes.date}>
                        <span>{timeConverter(userNews.time)}</span>
                    </div>                   
                </div>
                <div className={classes.pagenews_comment}>
                    <span>счетчик комментариев({props.usersNews.main.commentsParent.length})</span>
                </div>
            </div>
            <div className={classes.button_comments}>
                <button>Обновить комментарии</button>
            </div>
            <Comments comments={props}/>
            <div><NavLink to="/">Назад</NavLink></div>
        </div>
    )
}

export default PageNews