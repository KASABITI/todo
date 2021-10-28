import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskList from "./components/TaskList/TaskList";
import AddButton from "./components/AddButton/AddButton";
import DateTime from "./components/DateTime/DateTime";


function App() {
  return (
    <div className="App">
      <Header />
      <DateTime/>
      <TaskList/>
      <AddButton />
      <Footer />
    </div>
  );
}

export default App;
