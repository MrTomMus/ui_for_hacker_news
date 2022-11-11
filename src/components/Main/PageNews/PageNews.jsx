import React from "react";
import classes from './PageNews.module.css';
import mainLogo from '../../../assets/img/hacker-logo.png'
import { Link } from "react-router-dom";

const PageNews = () => {

    let comm = [1,2,3,4,5,6];

    let comment = comm.map((e) => (
        <div className={classes.logo_comments}>
            <img src={mainLogo} alt="" />
            <div className={classes.comments}>
                <span>sdasdsad dsafsaf dfdsgdfgafsaf dfdsgdfg </span>
            </div>
            <div>
                <span className={classes.logo_comments_comments}>Комментарии(0)</span>
            </div>
            
        </div>
    )
    );

    return (
        <div className={classes.pagenews_wrapper}>
            <div className={classes.pagenews}>
                <div className={classes.pagenews_title}>
                    <h2>Тут будет новость</h2>
                </div>
                <div className={classes.pagenews_author}>
                    <span>author</span>
                </div>
                <div className={classes.pagenews_link_date}>
                    <div className={classes.link}>
                        <span><a href="">ссылка</a></span>
                    </div>
                    <div className={classes.date}>
                        <span>Дата</span>
                    </div>                   
                </div>
                <div className={classes.pagenews_comment}>
                    <span>счетчик комментариев({comm.length})</span>
                </div>
            </div>
            <div className={classes.button_comments}>
                <button>Обновить комментарии</button>
            </div>
            {comment}
            <div><a href="/">Назад</a></div>
        </div>
    )
}

export default PageNews