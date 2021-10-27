import './App.css';
import Header from './component/Header/Header' ;
import Footer from './component/Footer/Footer';
import Task from './component/Task/Task';
// import Button from './component/AddButton/AddButton'
import AddButton from './component/AddButton/AddButton';

function App() {
  return (
    <div className="App">
      <Header/>
      <Task/>
      <AddButton/>
      <Footer/>
    </div>
  );
}

export default App;
