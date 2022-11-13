import './App.css';
import classes from './App.module.css'
import Header from './components/Header/Header';
import MainContainer from './components/Main/Main-container.jsx';


function App() {
  
  return ( 
    <div className={classes.wrapper}>
      <Header/>
      <MainContainer/> 
    </div>
  );
}

export default App;
