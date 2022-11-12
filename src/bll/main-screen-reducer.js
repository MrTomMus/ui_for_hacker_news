const SET_NEWS = 'SET-NEWS';

let inicialState = {
    newsPosts: []
}

const mainScreenReducer = (state = inicialState, action) => {
    switch(action.type){
        case SET_NEWS: {
            return {
                ...state,
                newsPosts: [action.data]
            }
        }
        default: {
            return state;
        }
    }
    
}

export let setNews = (data) => {
    return {
        type: SET_NEWS, data
    }
}

export default mainScreenReducer;