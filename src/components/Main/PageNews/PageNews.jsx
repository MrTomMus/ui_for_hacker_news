import React from "react";
import classes from './PageNews.module.css';
import Comments from './Сomments/Comments.jsx';
import comCounter from './Сomments/Comments.jsx'


const PageNews = () => {

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
                    <span>счетчик комментариев({comCounter.length})</span>
                </div>
            </div>
            <div className={classes.button_comments}>
                <button>Обновить комментарии</button>
            </div>
            <Comments/>
            <div><a href="/">Назад</a></div>
        </div>
    )
}

export default PageNews