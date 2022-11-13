import React from "react";
import classes from './Comments.module.css';
import mainLogo from '../../../../assets/img/main-logo.png'

const Comments = (props) => {

    let comments = props.comments.usersNews.main.commentsParent

    let comment = comments.map((e) => (
        <div key={e} className={classes.logo_comments}>
            <img src={mainLogo} alt="" />
            <div className={classes.comments}>
                <span>{e}</span>
            </div>
            <div>
                <span className={classes.logo_comments_comments}>Комментарии(0)</span>
            </div> 
        </div>
    )
    );

    return (
        <div>{comment}</div>  
    )
}


export default Comments;