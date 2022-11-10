import React from "react";
import classes from './MainScreen.module.css';
import newsLogo from '../../../assets/img/news.png'
import authorLogo from '../../../assets/img/author.png'
import scopeLogo from '../../../assets/img/scope.png'
import timeLogo from '../../../assets/img/time.png'

const MainScreen = () => {

    let arr = [1,2,4,5,7,4,5,7,4,5,7,4,5,7];

    let post = arr.map((e) => (
        <div className={classes.posts}>
            <div className={classes.post}>
                <div className={classes.post_title}>
                    <img src={newsLogo} alt="newslogo" />
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, architecto quae placeat maiores fugit fugiat quia reprehenderit nisi vitae eum qui ipsa sint consectetur incidunt, quod natus corrupti pariatur quos aliquid. Suscipit velit autem eaque ex pariatur magnam cupiditate laboriosam libero, cumque temporibus labore ducimus veniam provident earum ratione aut.</h2>
                </div>
                <div className={classes.post_author}>
                    <img src={authorLogo} alt="" />
                    <span>Автор</span>
                </div>
                <div className={classes.post_time_score}>
                    <div className={classes.time_score_score}>
                        <img src={scopeLogo} alt="" />
                        <span>Рейтинг</span>
                    </div>
                    <div className={classes.time_score_time}>
                        <img src={timeLogo} alt="" />
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