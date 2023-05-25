import './App.css';
import Header from './Components/Header';
import Timer from './Components/Timer';
import Select from './Components/Select';
import Form from './Components/Form';
import Cntxt from './Contexts/component1';
import SideNav from './Components/SideNav';
import Car from './Components/Car';
import { useState, createContext } from 'react';

const myContext = createContext();
function App() {
  const std = {
    name : "Sahil",
    age : 23
  }
  const [likes, setLikes] = useState(0);
  function HandleLikes(){
          setLikes(likes+5);
      }
const [name, setName] = useState("Sahil");
  function ChangeName(){
    setName(2);
  }
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  return (
    <div className="App">
      <myContext.Provider value={std}>
        
      </myContext.Provider>
        <Header title = "This Is Header" name ="Sahil khan" />
     <Form/>
        <SideNav/>
        <Car/>
        <Select/>
        <Cntxt/>


     <div id='a'>

     </div>
        <button onClick={HandleLikes}>Like {likes}</button>
        <br/>
        <button onClick={ChangeName}>My Name Is : {name}</button>
       
      <Timer/>
      <component1/>
    </div>
  );
}

export default App;
