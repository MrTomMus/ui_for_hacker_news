import React from "react";
import classes from './Comments.module.css';
import mainLogo from '../../../../assets/img/main-logo.png'

const Comments = () => {

    let comCounter = [1,2,3,4,5,6];

    let comment = comCounter.map((e) => (
        <div key={e} className={classes.logo_comments}>
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
        <div>{comment}</div>  
    )
}


export default Comments;