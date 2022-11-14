const SET_NEWS = 'SET-NEWS';
const SET_USER_NEWS = 'SET_USER_NEWS';
const SET_COMMENTS_NEWS = 'SET_COMMENTS_NEWS';
const DELETE_COMMENTS_NEWS = 'DELETE_COMMENTS_NEWS'

const inicialState = {
    newsPosts: [],
    userNews: null,
    commentsParent: [],
    commentsKids: [],

}

const mainReducer = (state = inicialState, action) => {
    switch(action.type){
        case SET_NEWS: {
            return {
                ...state,
                newsPosts: [...state.newsPosts.sort((a,b) => b.time-a.time), action.data]
            }
            
        }
        case SET_USER_NEWS: {
            return {
                ...state,
                userNews: action.data
            }
        }
        case SET_COMMENTS_NEWS: {
            return {
                ...state,
                commentsParent: [...state.commentsParent, action.data]
            }
        }
        case DELETE_COMMENTS_NEWS: {
        
            return {
                ...state,
                commentsParent: [],
            }
        }
       
        default: {
            return state;
        }
    }
    
}

export const setNews = (data) => {
    
    return {
        type: SET_NEWS, data
    } 
}

export const setUserNews = (data) => {
    return {
        type: SET_USER_NEWS, data
    }
}

export const setCommentsNews = (data) => {
    return {
        type: SET_COMMENTS_NEWS, data
    }
}

export const deleteCommentsNews = () => {
    return {
        type: DELETE_COMMENTS_NEWS
    }
} 

export default mainReducer;