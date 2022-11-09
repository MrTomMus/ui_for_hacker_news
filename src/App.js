import './App.css';
import classes from './App.module.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  
  return (
    <div className={classes.wrapper}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
