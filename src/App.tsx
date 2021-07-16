import './App.css';
import Header from './Components/Header'
import Main from './Components/Mainpage'
import Btn from './Components/Button';

function App() {
  return (
    <div className="App">
      <Header text="Star Wars" person={{FirstName:"Kristóf", LastName: "Szabó", Age:23}}/>
      <Main text2='General Kenobi!'/>
      <Btn fn= {()=> {console.log("Star Trek")}}/>
    </div>
  );
}

export default App;
