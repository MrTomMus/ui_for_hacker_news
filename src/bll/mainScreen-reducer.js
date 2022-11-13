const SET_USER_NEWS = 'SET-USER_NEWS';

let inicialState = {
    newsPosts: []
}

const mainScreenReducer = (state = inicialState, action) => {
    switch(action.type){
        case SET_USER_NEWS: {
            return {
                ...state,
                userNews: [action.data]
            }
        }
        default: {
            return state;
        }
    }
    
}

export let setUserNews = (data) => {
    return {
        type: SET_USER_NEWS, data
    }
}

export default mainScreenReducer;