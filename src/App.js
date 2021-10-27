import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Task from "./components/Task/Task";
import AddButton from "./components/AddButton/AddButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Task title={"Setup Storybook"} />
      <AddButton />
      <Footer />
    </div>
  );
}

export default App;
