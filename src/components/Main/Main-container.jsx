import { connect } from "react-redux";
import Main from "./Main.jsx"
import { setNews, setUserNews, setCommentsNews, deleteCommentsNews} from "../../bll/main-reducer.js";

let mapStateToProps = (state) => {
    return {
        main: state.main
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (data) => {
            dispatch(setNews(data))
        },
        setUserNews: (data) => {
            dispatch(setUserNews(data))
        },
        setCommentsNews: (data) => {
            dispatch(setCommentsNews(data))
        },
        deleteCommentsNews: () => {
            dispatch(deleteCommentsNews())
        },
    } 
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer;