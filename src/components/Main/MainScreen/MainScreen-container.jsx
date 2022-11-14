import { connect } from "react-redux";
import MainScreen from "./MainScreen.jsx"
import { setNews } from "../../../bll/mainScreen-reducer.js";

let mapStateToProps = (state) => {
    return {
        mainScreen: state.mainScreen,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserNews: (data) => {
            dispatch(setUserNews(data))
        },
    } 
}

const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen)

export default MainScreenContainer;