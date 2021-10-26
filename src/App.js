import './App.css';
import Header from './component/Header/Header' ;
import Footer from './component/Footer/Footer';
import Task from './component/Task/Task';

function App() {
  return (
    <div className="App">
      <Header/>
      <Task/>
      <Footer/>
    </div>
  );
}

export default App;
