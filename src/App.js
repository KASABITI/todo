import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";
import DateTime from "./components/DateTime/DateTime";
import React, {useState} from 'react';


function App(props) {

const [value, setValue] = useState("")



  const items =[
    {
        task:"Learn Reactjs",
        id:1
    }, 
    {
        task:"Play guitare",
        id:2
    }, 
    {
        task:"Chilling with family",
        id:3
    }, 
    {
        task:"Go to church",
        id:4
    }
]

  return (
    <div className="App">
      <Header />
      <DateTime/>
      <AddTask submit={props.submit}/>
      <TaskList items={items}/>
      
      <Footer />
    </div>
  );
}

export default App;
